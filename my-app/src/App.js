import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm email="" />
      <TabMenu items={[
        {
          classNames : "fa fa-fw fa-search",
          label : "SEARCH"
        },
        {
          classNames : "fa fa-fw fa-envelope",
          label : "CONTACT"
        },
        {
          classNames : "fa fa-fw fa-user",
          label : "LOGIN"
        }
      ]} />
    </div>
  );
}

export default App;
