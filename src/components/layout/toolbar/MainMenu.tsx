import React, { useContext, useState } from 'react';
import { Toolbar, ToolbarElement } from './Toolbar';
import { Action } from '../../../interfaces/Action';

import { dateToIsoString } from '../../../helpers/date-helpers';
import { ACTIONS } from '../../../config/todo-actions';
import { CustomTodoListDialog } from '../../dialogs/CustomTodoListDialog';
import { DateTodoListDialog } from '../../dialogs/DateTodoListDialog';
import { TodoContext } from '../../../context/TodoContext';
import { IDictionary } from '../../../helpers/dictionary/IDictionary';
import { SettingsManagerDialog } from '../../dialogs/SettingsManagerDialog';

export const MainMenu = () => {

  const [dateSelectorActive, setDateSelectorActive] = useState(false);
  const [todoListSelectorActive, setTodoListSelectorActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);

  const context = useContext(TodoContext);

  const dispatch: React.Dispatch<Action> = context.dispatch;
  const setKey = context.setKey;
  const dictionary: IDictionary = context.dictionary;

  const [activeItem, setActiveItem] = useState(1);

  const selectTodoListHandler = (todoList: string) => {
    const payload = { key: todoList };
    dispatch({ type: ACTIONS.GET_TODO_LIST_FROM_CUSTOM_KEY, payload });
    setKey(todoList);
  }

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
          <Toolbar label={ dictionary.terms.todos } clickLabelHandler={() => { setActiveItem(1)}} collapsed={ activeItem !== 1}>
            <ToolbarElement
              title={ dictionary.menu.dailyTodoLists}
              handler={() => { setDateSelectorActive(true); }}
              icon="calendar" />
            <ToolbarElement
              title={ dictionary.menu.customTodoLists }
              handler={() => { setTodoListSelectorActive(true); }}
              icon="list" />
          </Toolbar>
          <Toolbar label={ dictionary.terms.settings } clickLabelHandler={() => { setActiveItem(2)}} collapsed={ activeItem !== 2}>
            <ToolbarElement
              title={ dictionary.menu.configureSettings }
              handler={() => { setSettingsActive(true); }}
              icon="tools" />
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

      <SettingsManagerDialog
        active={settingsActive}
        onClose={ () => setSettingsActive(false) }
      />

    </>
  );
};
