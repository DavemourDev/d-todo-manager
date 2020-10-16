import React, { useContext, useState } from 'react';
import { Toolbar, ToolbarElement } from './Toolbar';
import { Action } from '../../../interfaces/Action';
import { TodoContext } from '../../../App';
import { dateToIsoString } from '../../../helpers/date-helpers';
import { ACTIONS } from '../../../config/todo-actions';
import { CustomTodoListDialog } from '../../dialogs/CustomTodoListDialog';
import { DateTodoListDialog } from '../../dialogs/DateTodoListDialog';

type MainMenuProps = {
  onSetTodoListKey: (key: string) => void,
}

export const MainMenu = ({
  onSetTodoListKey
}: MainMenuProps) => {

  const [dateSelectorActive, setDateSelectorActive] = useState(false);
  const [todoListSelectorActive, setTodoListSelectorActive] = useState(false);

  const context = useContext(TodoContext);

  const dispatch: React.Dispatch<Action> = context.dispatch;

  const selectTodoListHandler = (todoList: string) => {
    const payload = { key: todoList };
    dispatch({ type: ACTIONS.GET_TODO_LIST_FROM_CUSTOM_KEY, payload });
    onSetTodoListKey(todoList);
    
  }

  //---

  const selectDateHandler = (date: Date): void =>  {
    const key = dateToIsoString(date)
    const payload = { key };
    dispatch({ type: ACTIONS.GET_TODO_LIST_FROM_KEY_DATE, payload });
    onSetTodoListKey(key);
    setDateSelectorActive(false);

  }


  // TODO: Cambiar la terminología de la Toolbar para hacer contenedores con nombres apropiados
  return (
    <>
      <div className="toolbar-container">
        <div className="panel flex row justify-start wrap">
          <Toolbar label="Tareas" clickLabelHandler={() => { }}>
            <ToolbarElement
              title="Cargar tareas del día"
              handler={() => { setDateSelectorActive(true); }}
              icon="calendar" />
            <ToolbarElement
              title="Listas de tareas personalizadas"
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
