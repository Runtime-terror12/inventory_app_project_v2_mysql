import { useState } from 'react';
//import './App.css';
//import { Link } from 'react-router-dom'
import AddUser from './components/AddUser';
import LoginForm from './components/LoginForm';

 function App() {
  return (
    <div className='App'>
      <h1>Inventory App</h1>
      <AddUser />
      
    </div>
  );
}

export default App;

