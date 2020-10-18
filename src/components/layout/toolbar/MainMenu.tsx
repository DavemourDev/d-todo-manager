import React, { useContext, useState } from 'react';
import { Toolbar, ToolbarElement } from './Toolbar';
import { Action } from '../../../interfaces/Action';

import { dateToIsoString } from '../../../helpers/date-helpers';
import { ACTIONS } from '../../../config/todo-actions';
import { CustomTodoListDialog } from '../../dialogs/CustomTodoListDialog';
import { DateTodoListDialog } from '../../dialogs/DateTodoListDialog';
import { TodoContext } from '../../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../../helpers/dictionary';

export const MainMenu = () => {

  const [dateSelectorActive, setDateSelectorActive] = useState(false);
  const [todoListSelectorActive, setTodoListSelectorActive] = useState(false);

  const context = useContext(TodoContext);

  const dispatch: React.Dispatch<Action> = context.dispatch;
  const setKey = context.setKey;

  const settings = context.settings;
  const dictionary = DICTIONARY_MAPPING(settings.language);

  const selectTodoListHandler = (todoList: string) => {
    const payload = { key: todoList };
    dispatch({ type: ACTIONS.GET_TODO_LIST_FROM_CUSTOM_KEY, payload });
    setKey(todoList);
  }

  //---

  const selectDateHandler = (date: Date): void =>  {
    const key = dateToIsoString(date)
    const payload = { key };
    dispatch({ type: ACTIONS.GET_TODO_LIST_FROM_KEY_DATE, payload });
    setKey(key);
    setDateSelectorActive(false);

  }


  // TODO: Cambiar la terminología de la Toolbar para hacer contenedores con nombres apropiados
  return (
    <>
      <div className="toolbar-container">
        <div className="panel flex row justify-start wrap">
          <Toolbar label={ dictionary.todos } clickLabelHandler={() => { }}>
            <ToolbarElement
              title={ dictionary.loadDailyTodos}
              handler={() => { setDateSelectorActive(true); }}
              icon="calendar" />
            <ToolbarElement
              title={ dictionary.customTodoLists }
              handler={() => { setTodoListSelectorActive(true); }}
              icon="list" />
          </Toolbar>          
        </div>
      </div>

      <DateTodoListDialog
        active={ dateSelectorActive }
        onSelectDate={ selectDateHandler }
        onClose={ () => setDateSelectorActive(false) }
      />
      
      <CustomTodoListDialog
        active={todoListSelectorActive}
        onSelectTodoList={selectTodoListHandler}
        onCreateTodoList={selectTodoListHandler}
        onClose={ () => setTodoListSelectorActive(false) }
      />

    </>
  );
};
