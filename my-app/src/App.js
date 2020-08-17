import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';
import Table from './components/Table';
import Notification from './components/Notification';
import SearchBox from './components/SearchBox';
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
        <Table  />
        <Notification />
        <SearchBox/>
      </div>
    );
  }
};

export default App;
