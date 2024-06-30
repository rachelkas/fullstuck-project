import React from 'react';
import './App.css';
import Nav from './components/navbar/Nav'; // Adjust the path as necessary
import Routers from './routers/Routers'; // Adjust the path as necessary

function App() {
  return (
    <div className="App">
      <Nav />
      <Routers />
    </div>
  );
}

export default App;