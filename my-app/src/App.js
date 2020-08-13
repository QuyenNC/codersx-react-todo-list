import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <TabMenu />
    </div>
  );
}

export default App;
