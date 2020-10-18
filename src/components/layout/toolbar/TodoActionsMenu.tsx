import React, { useContext } from 'react';
import { useState } from "react";
import { ACTIONS } from '../../../config/todo-actions';
import { TodoContext } from '../../../context/TodoContext';
import { DICTIONARY_MAPPING } from '../../../helpers/dictionary';
import { Action } from '../../../interfaces/Action';
import { Formats, TodoFileExport } from '../../export/TodoFileExport';
import { Toolbar } from './Toolbar';
import { ToolbarElement } from "./ToolbarElement";

type ToolbarContainerProps = {
    onOpenFileModal: () => void
}

export const TodoActionsMenu = ({ onOpenFileModal }: ToolbarContainerProps) => {

    const context = useContext(TodoContext)

    const dispatch: React.Dispatch<Action> = context.dispatch;
    const filename = context.todoListKey;
    const data = context.todos;
    const [active, setActive] = useState(1);
    const dictionary = DICTIONARY_MAPPING(context.settings.language)

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

    const openFileImportModal = (): void => {
        onOpenFileModal();
    }

    return (
        <div className="toolbar-container">
            <div className="panel flex row justify-start wrap">
                <Toolbar label={ dictionary.mainMenuSortLabel} collapsed={active !== 1} clickLabelHandler={() => { setActive(1) }}>
                    <ToolbarElement
                        title={`${ dictionary.alphaSortTodos } (${dictionary.asc})`}
                        handler={sortAlphaAsc}
                        icon="sort-alpha-up-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.alphaSortTodos } (${dictionary.desc})`}
                        handler={sortAlphaDesc}
                        icon="sort-alpha-down-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.prioritySortTodos} (${dictionary.asc})`}
                        handler={sortPriorityAsc}
                        icon="sort-numeric-up-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.prioritySortTodos} (${dictionary.desc})`}
                        handler={sortPriorityDesc}
                        icon="sort-numeric-down-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.showCompletedFirst}`}
                        handler={sortCompletedFirst}
                        icon="check-circle"
                    />
                    <ToolbarElement
                        title={`${ dictionary.showPendingFirst}`}
                        handler={sortPendingFirst}
                        icon="circle"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.mainMenuCompletionStateLabel} collapsed={active !== 2} clickLabelHandler={() => { setActive(2) }} >
                    <ToolbarElement
                        title={ dictionary.markAllTodosAsCompleted}
                        handler={markAllAsCompleted}
                        icon="calendar-check"
                    />
                    <ToolbarElement
                        title={ dictionary.markAllTodosAsPending}
                        handler={markAllAsPending}
                        icon="calendar"
                    />
                    <ToolbarElement
                        title={ dictionary.invertCompletionState }
                        handler={toggleAll}
                        icon="exchange-alt"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.mainMenuDeletionLabel} collapsed={active !== 3} clickLabelHandler={() => { setActive(3) }}>
                    <ToolbarElement
                        title={ dictionary.deleteAllCompletedTodos}
                        handler={deleteAllCompleted}
                        icon="calendar-check"
                    />
                    <ToolbarElement
                        title={ dictionary.deleteAllPendingTodos}
                        handler={deleteAllPending}
                        icon="calendar"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.mainMenuExportLabel} collapsed={active !== 4} clickLabelHandler={() => { setActive(4) }}>
                    <TodoFileExport title={filename} data={data} format={Formats.CSV} />
                    <TodoFileExport title={filename} data={data} format={Formats.JSON} />
                    <TodoFileExport title={filename} data={data} format={Formats.TEXT} />
                </Toolbar>
                
                <Toolbar label={ dictionary.mainMenuImportLabel} collapsed={active !== 5} clickLabelHandler={() => { setActive(5) }}>
                    <ToolbarElement
                        title={ dictionary.importTodosFromFile}
                        handler={openFileImportModal}
                        icon="file"
                    />
                </Toolbar>
            </div>
        </div>
    )
}
