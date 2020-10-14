import React, { useEffect, useReducer, useState } from 'react';
import { TodoManager } from './components/todo/TodoManager';
import { ZoneWidget } from './components/widgets/ZoneWidget';
import { ACTIONS, reducer } from './config/todo-actions';
import { dateToIsoString} from './helpers/date-helpers';
import { storeTodos } from './services/storage';
import './helpers/icon-library';
import { Sandbox } from './components/Sandbox';
import { DateSelector } from './components/selectors/DateSelector';

export const TodoContext: React.Context<any> = React.createContext(null);

const App = () => {

  const [date, setDate] = useState<Date>(new Date());

  const [todos, dispatch] = useReducer(reducer, []);

  const storeTodosOnGivenDate = (): void => {
    const filename = dateToIsoString(date);
    storeTodos(filename, todos);
  };

  const loadTodosForGivenDate = (): void => {
    const payload = { date: dateToIsoString(date) };
    dispatch({ type: ACTIONS.GET_TODOS_FROM_DATE, payload });
  }

  useEffect(loadTodosForGivenDate, [ date ])

  useEffect(storeTodosOnGivenDate, [ todos ])

  return (
    <div className="App">
      <ZoneWidget/>
      <div className="panel flex row justify-start">
        <DateSelector value={date} onChange={ setDate }/>
      </div>
      <TodoContext.Provider value={{ todos, filename: dateToIsoString(date), dispatch }}>
        <TodoManager/>
      </TodoContext.Provider>
      <Sandbox></Sandbox>
    </div>
  );
}

export default App;
