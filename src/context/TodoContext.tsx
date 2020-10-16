import React, { createContext, ReactNode, ReactNodeArray, useReducer, useState } from "react";
import { reducer } from "../config/todo-actions";
import { dateToIsoString } from "../helpers/date-helpers";

// TODO: Integrar con la app
// TODO: Añadir reductor de claves personalizadas de lista

export const TodoContext: React.Context<any> = createContext(null);

type TodoContextProviderProps = {
  children: ReactNode | ReactNodeArray,
  todoListKey: string
};

const DEFAULT_KEY = dateToIsoString(new Date());

export const TodoContextProvider = ({ children, todoListKey }: TodoContextProviderProps) => {

  const [todos, dispatch] = useReducer(reducer, []);
  const [key, setKey] = useState(DEFAULT_KEY);

  return (
    <TodoContext.Provider value={{ todos, todoListKey, dispatch }}>
      { children }
    </TodoContext.Provider>
  )


}