import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Notification.css';

import notification from '../image/alarm.png';
class Notification extends Component {
    constructor(){
        super();
        this.friends = {
            hasUnread : false
        }
    }
    render() {
        return (
            <div className="Notification">
                  <div className="bell">
                      <img src={notification} alt="Notification"/>
                      {this.friends.hasUnread === true && <p></p>}
                  </div>
            </div>
        );
    }
  };

export default Notification;