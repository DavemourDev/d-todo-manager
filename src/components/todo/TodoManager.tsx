import React, { FormEvent, useContext, useState } from 'react';

import { TodoRow } from './TodoRow';

import { ACTIONS } from '../../config/todo-actions'
import { Todo } from '../../interfaces/Todo';
import { TodoContext } from '../../App';
import { Action } from '../../interfaces/Action';
import { TodoActionsMenu } from '../layout/toolbar/TodoActionsMenu';
import { getAveragePriority, getNumberOfCompletedTodos } from '../../helpers/data-summary';
import { Dialog } from '../content/Dialog';
import { TodoFileImport } from '../import/TodoFileImport';

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
                <h2 className="align-center">Tareas: {filename}</h2>
            </div>
            <TodoActionsMenu onOpenFileModal={ () => setFileModalActive(true) }/>
            <table>
                <thead>
                    <tr>
                        <th>Tarea</th>
                        <th>Prioridad</th>
                        <th>Completada?</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td></td>
                        <td>Prioridad media: { getAveragePriority(data).toFixed(3) }</td>
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
                        ): <tr><td colSpan={4} className="align-center">No hay tareas en la lista</td></tr>
                    }
                </tbody>
            </table>
            <div className="panel">
                <form onSubmit={ handleSubmit }>
                    <div className="flex row start">
                        <div className="form-group">
                            <label className="label">Crear</label>
                            <input type="text" value={name} maxLength={ NEW_TASK_INPUT_SIZE } size={ NEW_TASK_INPUT_SIZE } onChange={e => setName(e.target.value)} />
                            <button type="submit" disabled={ !name }>Añadir tarea</button>
                        </div>    
                    </div>
                </form>
            </div>

            <Dialog
                isOpen={fileModalActive}
                onClose={ () => setFileModalActive(false) }
            >
                <h2>Importar tareas desde un fichero externo</h2>
                <p>Selecciona el tipo de fichero. Ten en cuenta que las tareas que haya actualmente en la lista serán reemplazadas.</p>
                <TodoFileImport
                    onSelectFile={ handleImportTodosFromExternalSource }
                    onLoadDataError={ alert }
                />
            </Dialog>

        </div>
    )
};

export { TodoManager };