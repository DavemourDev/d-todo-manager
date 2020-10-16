import { Action } from "../interfaces/Action";
import { Todo } from "../interfaces/Todo";
import { loadTodosFromCustomKey, loadTodosFromDateKey } from "../services/storage";

const ACTIONS = {

    ADD_TODO: 'add todo',
    TOGGLE_TODO: 'toggle todo',
    DELETE_TODO: 'delete todo',
    SORT_ALPHA_ASC: 'sort alphabetically ascendent',
    SORT_ALPHA_DESC: 'sort alphabetically descendent',
    SORT_PRIORITY_ASC: 'Sort for priority ascendent',
    SORT_PRIORITY_DESC: 'Sort for priority descendent',
    SORT_COMPLETED_FIRST: 'Sort completed todos first',
    SORT_PENDING_FIRST: 'Sort pending todos first',
    GET_TODO_LIST_FROM_KEY_DATE: 'Gets todos from a given date list key',
    GET_TODO_LIST_FROM_CUSTOM_KEY: 'Gets todos from a given custom list key',
    SET_TODO_PRIORITY: 'Set todo priority',
    MARK_ALL_AS_COMPLETED: 'Set all todos state to complete',
    MARK_ALL_AS_PENDING: 'Set all todos state to pending',
    DELETE_ALL_COMPLETED: 'Delete all completed todos',
    DELETE_ALL_PENDING: 'Delete all pending todos',
    TOGGLE_ALL: 'Toggle all todos completion state',
    IMPORT_TODOS: 'Import todos from an external source' 
};

const newTodo = (name: string): Todo => {
    return {
        id: Date.now(),
        name: name,
        completed: false,
        priority: 1
    };
};

const reducer = (todos: Todo[], action: Action): Todo[] => {
    let reduced;
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [ ...todos, newTodo(action.payload.name) ];
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed}
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        case ACTIONS.SORT_ALPHA_ASC:
            reduced = todos.sort((a, b) => a.name.localeCompare(b.name));
            return Array.from(reduced);
        case ACTIONS.SORT_ALPHA_DESC:
            reduced = todos.sort((a, b) => b.name.localeCompare(a.name));
            return Array.from(reduced);
        case ACTIONS.SORT_PRIORITY_ASC:
            reduced = todos.sort((a, b) => a.priority - b.priority);
            return Array.from(reduced);
        case ACTIONS.SORT_PRIORITY_DESC:
            reduced = todos.sort((a, b) => b.priority - a.priority);
            return Array.from(reduced);
        case ACTIONS.SORT_COMPLETED_FIRST:
            reduced = todos.sort((a, b) => (b.completed ? 1 : 0) - (a.completed ? 1 : 0));
            return Array.from(reduced);
        case ACTIONS.SORT_PENDING_FIRST:
            reduced = todos.sort((a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0));
            return Array.from(reduced);
            case ACTIONS.GET_TODO_LIST_FROM_KEY_DATE:
            return loadTodosFromDateKey(action.payload.key);
        case ACTIONS.GET_TODO_LIST_FROM_CUSTOM_KEY:
            return loadTodosFromCustomKey(action.payload.key);
        case ACTIONS.SET_TODO_PRIORITY:
            return todos.map(todo => { 
                if (todo.id === action.payload.id) { 
                    todo.priority = action.payload.priority;
                }
                return todo;
            });
        case ACTIONS.MARK_ALL_AS_COMPLETED:
            return todos.map(todo => {
                todo.completed = true;
                return todo;
            });
        case ACTIONS.MARK_ALL_AS_PENDING:
            return todos.map(todo => {
                todo.completed = false;
                return todo;
            });
        case ACTIONS.TOGGLE_ALL:
            return todos.map(todo => {
                todo.completed = !todo.completed;
                return todo;
            });
        case ACTIONS.DELETE_ALL_COMPLETED:
            return todos.filter(todo => !todo.completed);
        case ACTIONS.DELETE_ALL_PENDING:
            return todos.filter(todo => todo.completed);
        case ACTIONS.IMPORT_TODOS:
            return [...action.payload.data];
        default: 
            return todos; 
    }
};

export { ACTIONS, reducer }