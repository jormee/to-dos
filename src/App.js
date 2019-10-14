import React from 'react';

import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';

import Header from './components/Header';
import Todos from './components/Todos';


const App = () => {

  return (
    <ThemeContextProvider>
      <TodoContextProvider>
        <Header className="banner" />
        <Todos />
      </TodoContextProvider>
    </ThemeContextProvider>
  )
}

export default App;