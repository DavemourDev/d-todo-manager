import { Todo } from "../interfaces/Todo";

const TODO_LIST_STORAGE_KEY = 'todo-list';

export const storeTodos = (key: string, todos: Todo[]) => {
  const storageKey = TODO_LIST_STORAGE_KEY + key;
  localStorage.setItem(storageKey, JSON.stringify({ todos }));
}

export const loadTodos = (key: string): Todo[] => {
  const storageKey = TODO_LIST_STORAGE_KEY + key;
  const loaded = JSON.parse(localStorage.getItem(storageKey) || "{ \"todos\": [] }");
  return loaded.todos;
}

export const saveTodo = (key: string, todo: Todo): void => {
  const todos: Todo[] = loadTodos(key);
  todos.push(todo);
  storeTodos(key, todos);
}