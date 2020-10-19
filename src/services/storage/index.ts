import { Settings } from "http2";
import { Todo } from "../../interfaces/Todo";

const DATE_TODO_LIST_STORAGE_KEY = '#date--';
const CUSTOM_LIST_STORAGE_KEY = '#user-defined--';
const CUSTOM_STORAGE_KEYS_KEY = '#keys';
const SETTINGS_STORAGE_KEY = '#settings';

const EMPTY_TODOS = { todos: [] };
const EMPTY_KEYS = { keys: [] };

export const getCustomStorageKeys = (): string[] => {
  const loadedKeys = JSON.parse(localStorage.getItem(CUSTOM_STORAGE_KEYS_KEY ) || JSON.stringify(EMPTY_KEYS));
  return loadedKeys.keys;
};

export const storeTodosOnDateKey = (key: string, todos: Todo[]) => {
  const storageKey = DATE_TODO_LIST_STORAGE_KEY + key;
  localStorage.setItem(storageKey, JSON.stringify({ todos }));
}

export const loadTodosFromDateKey = (key: string): Todo[] => {
  const storageKey = DATE_TODO_LIST_STORAGE_KEY + key;
  const loaded = JSON.parse(localStorage.getItem(storageKey) || JSON.stringify(EMPTY_TODOS));
  return loaded.todos;
}

export const saveTodoOnDateKey = (key: string, todo: Todo): void => {
  const todos: Todo[] = loadTodosFromDateKey(key);
  todos.push(todo);
  storeTodosOnDateKey(key, todos);
}

const addCustomStorageKey = (key: string) => {
  const keys: string[] = getCustomStorageKeys() || [];
  keys.push(key);
  localStorage.setItem(CUSTOM_STORAGE_KEYS_KEY, JSON.stringify({ keys }));
};

const createCustomTodoList = (key: string): Todo[] => {
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  addCustomStorageKey(key);
  localStorage.setItem(storageKey, JSON.stringify(EMPTY_TODOS));
  return [];
}

export const loadTodosFromCustomKey = (key: string): Todo[] => {

  // SI la lista que se intenta obtener no existe, se creará
  if (!customKeyExists(key)) {
    createCustomTodoList(key);
  } 
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  const loaded = JSON.parse(localStorage.getItem(storageKey) || JSON.stringify(EMPTY_TODOS));
  return loaded.todos || [];
}

export const customKeyExists = (key: string) => {
  return getCustomStorageKeys().includes(key);
}

export const storeTodosOnCustomKey = (key: string, todos: Todo[]) => {
  const storageKey = CUSTOM_LIST_STORAGE_KEY + key;
  
  localStorage.setItem(storageKey, JSON.stringify({ todos }));
}

export const storeSettings = (settings: Settings) => {
  localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
}