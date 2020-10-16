import React, { useEffect, useReducer, useState } from 'react';
import { TodoManager } from './components/todo/TodoManager';
import { ZoneWidget } from './components/widgets/ZoneWidget';
import { reducer } from './config/todo-actions';
import { storeTodosOnCustomKey, storeTodosOnDateKey } from './services/storage';
import './helpers/icon-library';
import { Sandbox } from './components/Sandbox';
import { MainMenu } from './components/layout/toolbar/MainMenu';
import { checkISODate } from './helpers/patterns';

export const TodoContext: React.Context<any> = React.createContext(null);

const App = () => {

  const [todoListKey, setTodoListKey] = useState<string | null>(null);
  const [todos, dispatch] = useReducer(reducer, []);

  const storeTodos = (): void => {
    
    if (todoListKey != null) {
      if (checkISODate(todoListKey)) {
        storeTodosOnDateKey(todoListKey, todos);
      } else {
        storeTodosOnCustomKey(todoListKey, todos);
      }
    }
  };

  useEffect(storeTodos, [todos])

  return (
    <div className="App">
      <TodoContext.Provider value={{ todos, todoListKey: todoListKey, dispatch }}>
        <ZoneWidget />
        <MainMenu onSetTodoListKey={ setTodoListKey } />
        {(todoListKey != null) && (
          <TodoManager />
        )}
        <Sandbox/>
      </TodoContext.Provider>

    </div>
  );
}

export default App;
