import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';

class App extends Component {
  render() {
    const email = "abc@example.com";
    return (
      <div className="App">
        <Header />
        <LoginForm email={email} />
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
        <RecommendedFriends />
      </div>
    );
  }
};

export default App;
