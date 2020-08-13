import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <LoginForm />
    </div>
  );
}

export default App;
