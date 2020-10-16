import { Todo } from "../interfaces/Todo";

const DATE_TODO_LIST_STORAGE_KEY = '#date--';
const CUSTOM_LIST_STORAGE_KEY = '#user-defined--'
const CUSTOM_STORAGE_KEYS_KEY = '#keys'

export const getCustomStorageKeys = (): string[] => {
  const loadedKeys = JSON.parse(localStorage.getItem(CUSTOM_STORAGE_KEYS_KEY ) || "{\"keys\": []}");
  return loadedKeys.keys;
};

export const storeTodosOnDateKey = (key: string, todos: Todo[]) => {
  const storageKey = DATE_TODO_LIST_STORAGE_KEY + key;
  localStorage.setItem(storageKey, JSON.stringify({ todos }));
}

export const loadTodosFromDateKey = (key: string): Todo[] => {
  const storageKey = DATE_TODO_LIST_STORAGE_KEY + key;
  const loaded = JSON.parse(localStorage.getItem(storageKey) || "{ \"todos\": [] }");
  return loaded.todos;
}

export const saveTodoOnDateKey = (key: string, todo: Todo): void => {
  const todos: Todo[] = loadTodosFromDateKey(key);
  todos.push(todo);
  storeTodosOnDateKey(key, todos);
}

export const addCustomStorageKey = (key: string) => {
  const keys: string[] = getCustomStorageKeys() || [];
  keys.push(key);
  localStorage.setItem(CUSTOM_STORAGE_KEYS_KEY, JSON.stringify({ keys }));
};

export const createCustomTodoList = (key: string): Todo[] => {
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  addCustomStorageKey(key);
  localStorage.setItem(storageKey, JSON.stringify('{todos: [] }'));
  return [];
}


export const loadTodosFromCustomKey = (key: string): Todo[] => {

  // SI la lista que se intenta obtener no existe, se creará
  if (!customKeyExists(key)) {
    createCustomTodoList(key);
  } 
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  const loaded = JSON.parse(localStorage.getItem(storageKey) || "{ \"todos\": [] }");
  return loaded.todos || [];
}


export const customKeyExists = (key: string) => {
  return getCustomStorageKeys().includes(key);
}

export const storeTodosOnCustomKey = (key: string, todos: Todo[]) => {
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  
  localStorage.setItem(storageKey, JSON.stringify({ todos }));
}