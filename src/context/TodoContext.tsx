import React, { createContext, ReactNode, ReactNodeArray, useEffect, useReducer, useState } from "react";
import { reducer as todoReducer } from "../config/todo-actions";
import { dateToIsoString } from "../helpers/date-helpers";
import { Settings } from "../interfaces/Settings";
import { reducer as settingsReducer } from '../config/settings-actions';
import { checkISODate } from "../helpers/patterns";
import { storeTodosOnDateKey, storeTodosOnCustomKey } from "../services/storage/index";
import { DICTIONARY_MAPPING, Language } from "../helpers/dictionary";

export const TodoContext: React.Context<any> = createContext(null);

type TodoContextProviderProps = {
  children: ReactNode | ReactNodeArray,
};

const DEFAULT_KEY = dateToIsoString(new Date());

const DEFAULT_SETTINGS: Settings = {
  language: navigator.language.slice(0, 2) as Language
};

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {

  const [todos, dispatch] = useReducer(todoReducer, []);
  const [key, setKey] = useState(DEFAULT_KEY);
  const [settings, settingsDispatcher] = useReducer(settingsReducer, DEFAULT_SETTINGS);
  const [dictionary, setDictionary] = useState(DICTIONARY_MAPPING(settings.language));

  const storeTodos = (): void => {
      
    if (key != null) {
      if (checkISODate(key)) {
        storeTodosOnDateKey(key, todos);
      } else {
        storeTodosOnCustomKey(key, todos);
      }
    }
  };
  
  const refreshSettings = (): void => {
    setDictionary(DICTIONARY_MAPPING(settings.language));
  }

  useEffect(storeTodos, [todos])
  useEffect(refreshSettings, [settings]);

  return (
    <TodoContext.Provider value={{ todos, todoListKey: key, dispatch, settings, settingsDispatcher, setKey, dictionary }}>
      { children }
    </TodoContext.Provider>
  );


}