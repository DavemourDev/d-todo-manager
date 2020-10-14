import React, { useContext } from 'react';
import { useState } from "react";
import { TodoContext } from '../../../App';
import { ACTIONS } from '../../../config/todo-actions';
import { Action } from '../../../interfaces/Action';
import { Gap } from '../../content/Gap';
import { Formats, TodoFileExport } from '../../export/TodoFileExport';
import { Toolbar } from './Toolbar';
import { ToolbarElement } from "./ToolbarElement";

const ToolbarContainer = () => {

  const context = useContext(TodoContext)

  const dispatch: React.Dispatch<Action> = context.dispatch;
  const filename = context.filename;
  const data = context.todos;

  const [active, setActive] = useState(1);

  const sortAlphaAsc = () => {
    dispatch({ type: ACTIONS.SORT_ALPHA_ASC, payload: {} });
  };

  const sortAlphaDesc = () => {
      dispatch({ type: ACTIONS.SORT_ALPHA_DESC, payload: {} });
  };

  const sortPriorityAsc = (): void => {
      dispatch({ type: ACTIONS.SORT_PRIORITY_ASC, payload: {} });
  };

  const sortPriorityDesc = (): void => {
      dispatch({ type: ACTIONS.SORT_PRIORITY_DESC, payload: {} });
  };

  const sortCompletedFirst = (): void => {
      dispatch({ type: ACTIONS.SORT_COMPLETED_FIRST, payload: {} });
  };

  const sortPendingFirst = (): void => {
      dispatch({ type: ACTIONS.SORT_PENDING_FIRST, payload: {} });
  };

  const markAllAsCompleted = (): void => {
      dispatch({ type: ACTIONS.MARK_ALL_AS_COMPLETED, payload: {} });
  };

  const markAllAsPending = (): void => {
      dispatch({ type: ACTIONS.MARK_ALL_AS_PENDING, payload: {} });
  };

  const toggleAll = (): void => {
      dispatch({ type: ACTIONS.TOGGLE_ALL, payload: {} });
  }

  const deleteAllCompleted = (): void => {
      dispatch({ type: ACTIONS.DELETE_ALL_COMPLETED, payload: {} });
  };

  const deleteAllPending = (): void => {
      dispatch({ type: ACTIONS.DELETE_ALL_PENDING, payload: {} });
  };

  return (
    <div className="toolbar-container">
      
      <div className="panel flex row justify-start wrap">
        <Toolbar label="Orden" collapsed={ active !== 1 } clickLabelHandler={ () => {setActive(1) } }>
          <ToolbarElement
              title="Ordenar tareas alfabéticamente (ascendente)"
              handler={sortAlphaAsc}
              icon="sort-alpha-up-alt"
          />
          <ToolbarElement
              title="Ordenar tareas alfabéticamente (descendente)"
              handler={sortAlphaDesc}
              icon="sort-alpha-down-alt"
          />
          <ToolbarElement
              title="Ordenar tareas por prioridad (ascendente)"
              handler={sortPriorityAsc}
              icon="sort-numeric-up-alt"
          />
          <ToolbarElement
              title="Ordenar tareas por prioridad (descendente)"
              handler={sortPriorityDesc}
              icon="sort-numeric-down-alt"
          />
          <ToolbarElement
              title="Mostrar completadas primero"
              handler={sortCompletedFirst}
              icon="check-circle"
          />
          <ToolbarElement
              title="Mostrar pendientes primero"
              handler={sortPendingFirst}
              icon="circle"
          />
        </Toolbar>
        <Gap/>
        <Toolbar label="Estado" collapsed={active !== 2} clickLabelHandler={() => { setActive(2) }} >
          <ToolbarElement
              title="Marcar todas como completadas"
              handler={markAllAsCompleted}
              icon="calendar-check"
          />
          <ToolbarElement
              title="Marcar todas como pendientes"
              handler={ markAllAsPending }
              icon="calendar"
          />
          <ToolbarElement
              title="Intercambiar completadas con pendientes"
              handler={toggleAll}
              icon="exchange-alt"
          />
        </Toolbar>
        <Gap/>
        <Toolbar label="Borrar" collapsed={active !== 3} clickLabelHandler={() => { setActive(3) }}>
          <ToolbarElement
              title="Eliminar tareas completadas"
              handler={deleteAllCompleted}
              icon="calendar-check"
          />
          <ToolbarElement
              title="Eliminar tareas pendientes"
              handler={ deleteAllPending }
              icon="calendar"
          />
        </Toolbar>
        <Gap/>
        <Toolbar label="Exportar" collapsed={active !== 4} clickLabelHandler={() => { setActive(4) }}>
          <TodoFileExport title={ filename } data={ data } format={Formats.CSV}/>
          <TodoFileExport title={ filename } data={ data } format={Formats.JSON}/>
          <TodoFileExport title={ filename } data={ data } format={Formats.TEXT}/>
        </Toolbar>
      </div>
    </div>
  )
}

export { ToolbarContainer };