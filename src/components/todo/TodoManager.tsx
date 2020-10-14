import React, { FormEvent, useContext, useState } from 'react';

import { TodoRow } from './TodoRow';

import { ACTIONS } from '../../config/todo-actions'
import { Todo } from '../../interfaces/Todo';
import { TodoContext } from '../../App';
import { Action } from '../../interfaces/Action';
import { ToolbarContainer } from '../layout/toolbar/ToolbarContainer';
import { getAveragePriority, getNumberOfCompletedTodos } from '../../helpers/data-summary';

const NEW_TASK_INPUT_SIZE = 60;

type TodoManagerProps = {

};

const TodoManager = () => {

    const [name, setName] = useState('');

    const context = useContext(TodoContext);
    const data: Todo[] = context.todos;
    const dispatch: React.Dispatch<Action> = context.dispatch;
    const filename = context.filename;

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    };

    return (
        <div className="todo-list">
            <div className="panel">
                <h2 className="align-center">Tareas: {filename}</h2>
            </div>
            <ToolbarContainer/>
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

        </div>
    )
};

export { TodoManager };