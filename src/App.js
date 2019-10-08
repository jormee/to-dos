import React from 'react';
import Header from './components/Header';
import Todos from './components/Todos';


const App = () => {

  return (
    <div>
      <Header />
      <Todos className="container" />
    </div>
  )
}

export default App;