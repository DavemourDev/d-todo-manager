import React, { useContext } from 'react';
import { useState } from "react";
import { ACTIONS } from '../../../config/todo-actions';
import { TodoContext } from '../../../context/TodoContext';
import { IDictionary } from '../../../helpers/dictionary/IDictionary';
import { Action } from '../../../interfaces/Action';
import { Todo } from '../../../interfaces/Todo';
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
    const data: Todo[] = context.todos;
    const dictionary: IDictionary = context.dictionary;

    const [activeItem, setActiveItem] = useState(1);

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
                <Toolbar label={ dictionary.terms.toSort} collapsed={activeItem !== 1} clickLabelHandler={() => { setActiveItem(1) }}>
                    <ToolbarElement
                        title={`${ dictionary.tooltips.alphaSort } (${dictionary.terms.ascendent})`}
                        handler={sortAlphaAsc}
                        icon="sort-alpha-up-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.tooltips.alphaSort } (${dictionary.terms.descendent})`}
                        handler={sortAlphaDesc}
                        icon="sort-alpha-down-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.tooltips.prioritySort} (${dictionary.terms.descendent})`}
                        handler={sortPriorityAsc}
                        icon="sort-numeric-up-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.tooltips.prioritySort} (${dictionary.terms.descendent})`}
                        handler={sortPriorityDesc}
                        icon="sort-numeric-down-alt"
                    />
                    <ToolbarElement
                        title={`${ dictionary.tooltips.showCompletedFirst}`}
                        handler={sortCompletedFirst}
                        icon="check-circle"
                    />
                    <ToolbarElement
                        title={`${ dictionary.tooltips.showPendingFirst}`}
                        handler={sortPendingFirst}
                        icon="circle"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.terms.completionState} collapsed={activeItem !== 2} clickLabelHandler={() => { setActiveItem(2) }} >
                    <ToolbarElement
                        title={ dictionary.tooltips.markAllAsCompleted }
                        handler={markAllAsCompleted}
                        icon="calendar-check"
                    />
                    <ToolbarElement
                        title={ dictionary.tooltips.markAllAsPending }
                        handler={markAllAsPending}
                        icon="calendar"
                    />
                    <ToolbarElement
                        title={ dictionary.tooltips.toggleCompletionState }
                        handler={toggleAll}
                        icon="exchange-alt"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.terms.deletion } collapsed={activeItem !== 3} clickLabelHandler={() => { setActiveItem(3) }}>
                    <ToolbarElement
                        title={ dictionary.tooltips.deleteCompletedTodos}
                        handler={deleteAllCompleted}
                        icon="calendar-check"
                    />
                    <ToolbarElement
                        title={ dictionary.tooltips.deletePendingTodos}
                        handler={deleteAllPending}
                        icon="calendar"
                    />
                </Toolbar>
                
                <Toolbar label={ dictionary.terms.export } collapsed={activeItem !== 4} clickLabelHandler={() => { setActiveItem(4) }}>
                    <TodoFileExport title={filename} data={data} format={Formats.CSV} />
                    <TodoFileExport title={filename} data={data} format={Formats.JSON} />
                    <TodoFileExport title={filename} data={data} format={Formats.TEXT} />
                </Toolbar>
                
                <Toolbar label={ dictionary.terms.import} collapsed={activeItem !== 5} clickLabelHandler={() => { setActiveItem(5) }}>
                    <ToolbarElement
                        title={ dictionary.tooltips.importTodosFromFile }
                        handler={openFileImportModal}
                        icon="file"
                    />
                </Toolbar>
            </div>
        </div>
    )
}
