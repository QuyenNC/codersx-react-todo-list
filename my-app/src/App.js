import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import TabMenu from './components/TabMenu';
import RecommendedFriends from './components/RecommendedFriends';
import Table from './components/Table';
import Notification from './components/Notification';
import SearchBox from './components/SearchBox';
import Showmodal from './components/Showmodal';
class App extends Component {
  constructor() {
    super();
    this.state={
      isComplete : true
    } 
    this.items=[
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
    ];
    this.openModal = () =>
      this.setState({
        isComplete : this.setStateOnclick(this.state.isComplete)
      })
  }
  setStateOnclick(isComplete){
    switch(isComplete){
      case true:
        return false;
      case false: 
        return true;
      default :
        return true;
    }
  }
  render() {
    const email = "abc@example.com";
    return (
      <div className="App">
        <Header />
        <LoginForm email={email} />
        <TabMenu items={this.items} />
        <RecommendedFriends />
        <Table  />
        <Notification />
        <SearchBox/>
        <Showmodal onclick={this.openModal} complete={this.state}/>
      </div>
    );
  }
};

export default App;
