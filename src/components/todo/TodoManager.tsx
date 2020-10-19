import React, { FormEvent, useContext, useState } from 'react';

import { TodoRow } from './TodoRow';

import { ACTIONS } from '../../config/todo-actions'
import { Todo } from '../../interfaces/Todo';
import { Action } from '../../interfaces/Action';
import { TodoActionsMenu } from '../layout/toolbar/TodoActionsMenu';
import { getAveragePriority, getNumberOfCompletedTodos } from '../../helpers/data-summary';
import { Dialog } from '../content/Dialog';
import { TodoFileImport } from '../import/TodoFileImport';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { TodoContext } from '../../context/TodoContext';
import { capitalize, sanitize } from '../../helpers/string-helpers';

const NEW_TODO_INPUT_SIZE = 60;

const TodoManager = () => {

    const [name, setName] = useState('');
    const [ fileModalActive, setFileModalActive] = useState(false);

    const context = useContext(TodoContext);
    const data: Todo[] = context.todos;
    const dispatch: React.Dispatch<Action> = context.dispatch;
    const filename = context.todoListKey;
    const dictionary: IDictionary = context.dictionary;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const sanitizedName = sanitize(name);
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: sanitizedName } });
        setName('');
    };

    const handleImportTodosFromExternalSource = (data: Todo[]): void => {
        const payload = { data };
        dispatch({ type: ACTIONS.IMPORT_TODOS, payload });
        setFileModalActive(false);
    }


    return (
        <div className="todo-list">
            <div className="panel">
                <h2 className="align-center">{ capitalize(dictionary.terms.todoList) }: {filename}</h2>
            </div>
            <TodoActionsMenu onOpenFileModal={ () => setFileModalActive(true) }/>
            <table>
                <thead>
                    <tr>
                        <th>{ capitalize(dictionary.terms.todo) }</th>
                        <th>{ capitalize(dictionary.terms.priority) }</th>
                        <th>{ capitalize(dictionary.terms.completionState) }</th>
                        <th>{ capitalize(dictionary.terms.actions) }</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className="align-center">
                        <td></td>
                        <td>{ capitalize(dictionary.terms.averagePriority) }: { getAveragePriority(data).toFixed(3) }</td>
                        <td>{ getNumberOfCompletedTodos(data) }/{data.length}</td>
                        <td></td>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        (data.length > 0) ? (
                            data.map((todo) => (
                                <TodoRow key={ todo.id } todo={todo} dispatch={ dispatch }/>
                            ))     
                        ) : <tr><td colSpan={4} className="align-center">{dictionary.issues.noTodosOnList}</td></tr>
                    }
                </tbody>
            </table>
            <div className="panel">
                <form onSubmit={ handleSubmit }>
                    <div className="flex row start">
                        <div className="form-group">
                            <label className="label">{ capitalize(dictionary.terms.create) }</label>
                            <input type="text"
                                value={name}
                                maxLength={NEW_TODO_INPUT_SIZE}
                                size={NEW_TODO_INPUT_SIZE}
                                onChange={e => setName(e.target.value)}
                            />
                            <button type="submit" disabled={!name.trim()}>
                                {dictionary.labels.addTodo}
                            </button>
                        </div>    
                    </div>
                </form>
            </div>

            <Dialog
                isOpen={fileModalActive}
                onClose={ () => setFileModalActive(false) }
            >
                <h2>{ dictionary.tooltips.importTodosFromFile}</h2>
                <p>{ dictionary.descriptions.importTodosFromFile }</p>
                <TodoFileImport
                    onSelectFile={ handleImportTodosFromExternalSource }
                    onLoadDataError={ alert }
                />
            </Dialog>

        </div>
    )
};

export { TodoManager };