import React, { createContext, ReactNode, ReactNodeArray, useEffect, useReducer, useState } from "react";
import { reducer as todoReducer } from "../config/todo-actions";
import { dateToIsoString } from "../helpers/date-helpers";
import { Settings } from "../interfaces/Settings";
import { reducer as settingsReducer } from '../config/settings-actions';
import { checkISODate } from "../helpers/patterns";
import { storeTodosOnDateKey, storeTodosOnCustomKey } from "../services/storage";

export const TodoContext: React.Context<any> = createContext(null);

type TodoContextProviderProps = {
  children: ReactNode | ReactNodeArray,
};

const DEFAULT_KEY = dateToIsoString(new Date());

const DEFAULT_SETTINGS: Settings = {
  language: 'ca'
};

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {

  const [todos, dispatch] = useReducer(todoReducer, []);
  const [key, setKey] = useState(DEFAULT_KEY);
  const [settings, settingsDispatcher] = useReducer(settingsReducer, DEFAULT_SETTINGS);
  
  const storeTodos = (): void => {
      
    if (key != null) {
      if (checkISODate(key)) {
        storeTodosOnDateKey(key, todos);
      } else {
        storeTodosOnCustomKey(key, todos);
      }
    }
  };
  
  useEffect(storeTodos, [todos])

  return (
    <TodoContext.Provider value={{ todos, todoListKey: key, dispatch, settings, settingsDispatcher, setKey }}>
      { children }
    </TodoContext.Provider>
  );


}