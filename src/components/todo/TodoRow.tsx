/* eslint-disable jsx-a11y/accessible-emoji */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Reducer, ReducerAction, useContext } from 'react';
import { ACTIONS } from '../../config/todo-actions';
import { TodoContext } from '../../context/TodoContext';
import { IDictionary } from '../../helpers/dictionary/IDictionary';
import { capitalize } from '../../helpers/string-helpers';
import { Action } from '../../interfaces/Action';
import { Todo } from '../../interfaces/Todo';
import { Counter } from '../selectors/Counter';


type TodoRowProps = {
    todo: Todo,
    dispatch: React.Dispatch<ReducerAction<Reducer<Todo[], Action>>>
}

const MIN_PRIORITY = 1;
const MAX_PRIORITY = 5;

const TodoRow = ({ todo, dispatch }: TodoRowProps) => {
    
    const context = useContext(TodoContext)
    const dictionary: IDictionary = context.dictionary;

    const handleToggleTodo = (): void => {
        dispatch({ 
            type: ACTIONS.TOGGLE_TODO,
            payload: {
                id: todo.id
            } 
        }); 
    }

    const handlePriorityChange = (newPriority: number): void => {
        dispatch({ 
            type: ACTIONS.SET_TODO_PRIORITY,
            payload: {
                id: todo.id,
                priority: newPriority
            } 
        }); 
    }

    const handleDelete = (): void => {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {
                id: todo.id
            }
        });
    }

    return (
        <tr className={ `todo-row ${(todo.completed && "completed")}` }>
            <td>{todo.name}</td>
            <td className="flex row center">
                <Counter value={todo.priority}
                    minValue={MIN_PRIORITY}
                    maxValue={MAX_PRIORITY}
                    onChange={handlePriorityChange}
                    increaseLabel={ capitalize(dictionary.tooltips.increasePriority) }
                    decreaseLabel={ capitalize(dictionary.tooltips.decreasePriority) }
                />
            </td>
            <td>
                <div className="flex row center">
                    <div className="toolbar-item-container">
                        <button
                            className="toolbar-element icon"
                            onClick={handleToggleTodo}
                            title={capitalize(dictionary.tooltips.toggleCompletionState)}
                        >
                            <FontAwesomeIcon icon={todo.completed ? "check-square": "square" }/>
                        </button>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex row center">
                    <div className="toolbar-item-container">
                        <button
                            className="toolbar-element icon"
                            title={capitalize(dictionary.tooltips.deleteTodo) }
                            onClick={handleDelete}
                        >
                            <FontAwesomeIcon icon="trash-alt"/>
                        </button>
                    </div>
                </div>
            </td>
            
        </tr>
    );
};


export { TodoRow };
