import React, { FormEvent, useContext, useState } from 'react';

import { TodoRow } from './TodoRow';

import { ACTIONS } from '../../config/todo-actions'
import { Todo } from '../../interfaces/Todo';
import { Action } from '../../interfaces/Action';
import { TodoActionsMenu } from '../layout/toolbar/TodoActionsMenu';
import { getAveragePriority, getNumberOfCompletedTodos } from '../../helpers/data-summary';
import { Dialog } from '../content/Dialog';
import { TodoFileImport } from '../import/TodoFileImport';
import { DICTIONARY_MAPPING } from '../../helpers/dictionary';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { TodoContext } from '../../context/TodoContext';

const NEW_TASK_INPUT_SIZE = 60;

type TodoManagerProps = {

};

const TodoManager = () => {

    const [name, setName] = useState('');
    const [ fileModalActive, setFileModalActive] = useState(false);

    const context = useContext(TodoContext);
    const data: Todo[] = context.todos;
    const dispatch: React.Dispatch<Action> = context.dispatch;
    const filename = context.todoListKey;
    const settings = context.settings;
    const dictionary: IDictionary = DICTIONARY_MAPPING(settings.language);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
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
                <h2 className="align-center">{ dictionary.todoList }: {filename}</h2>
            </div>
            <TodoActionsMenu onOpenFileModal={ () => setFileModalActive(true) }/>
            <table>
                <thead>
                    <tr>
                        <th>{ dictionary.todo }</th>
                        <th>{ dictionary.priority }</th>
                        <th>{ dictionary.completed }</th>
                        <th>{ dictionary.actions }</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>{ dictionary.averagePriority }: { getAveragePriority(data).toFixed(3) }</td>
                        <td className="align-center">{ getNumberOfCompletedTodos(data) }/{data.length}</td>
                        <td className="align-center"></td>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        (data.length > 0) ? (
                            data.map((todo) => (
                                <TodoRow key={ todo.id } todo={todo} dispatch={ dispatch }/>
                            ))     
                        ) : <tr><td colSpan={4} className="align-center">{dictionary.noTodosInList}</td></tr>
                    }
                </tbody>
            </table>
            <div className="panel">
                <form onSubmit={ handleSubmit }>
                    <div className="flex row start">
                        <div className="form-group">
                            <label className="label">{ dictionary.create }</label>
                            <input type="text"
                                value={name}
                                maxLength={NEW_TASK_INPUT_SIZE}
                                size={NEW_TASK_INPUT_SIZE}
                                onChange={e => setName(e.target.value)}
                            />
                            <button type="submit" disabled={!name}>
                                {dictionary.addTodo}
                            </button>
                        </div>    
                    </div>
                </form>
            </div>

            <Dialog
                isOpen={fileModalActive}
                onClose={ () => setFileModalActive(false) }
            >
                <h2>{ dictionary.importTodosFromExternalFileTitle}</h2>
                <p>{ dictionary.importTodosFromExternalFileDescription }</p>
                <TodoFileImport
                    onSelectFile={ handleImportTodosFromExternalSource }
                    onLoadDataError={ alert }
                />
            </Dialog>

        </div>
    )
};

export { TodoManager };