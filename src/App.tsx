import React from 'react';
import { TodoManager } from './components/todo/TodoManager';
import { ZoneWidget } from './components/widgets/ZoneWidget';
import './helpers/icon-library';
import { Sandbox } from './components/Sandbox';
import { MainMenu } from './components/layout/toolbar/MainMenu';
import { TodoContextProvider } from './context/TodoContext';

const App = () => {

  return (
    <div className="App">
      <TodoContextProvider>
        <ZoneWidget />
        <MainMenu  />
          <TodoManager />
        <Sandbox/>
      </TodoContextProvider>

    </div>
  );
}

export default App;
