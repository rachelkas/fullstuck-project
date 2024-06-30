import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav';
import Routers from './routers/Routers';

function App() {
  return (
    <div className="App">
      <Nav /> {/* Include Nav component here */}
      <Routers />
    </div>
  );
}

export default App;