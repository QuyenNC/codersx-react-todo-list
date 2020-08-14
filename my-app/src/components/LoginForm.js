import React, { Component } from 'react';
import './LoginForm.css';
class LoginForm extends Component {
    render() {
        
        return (
            <div className= "LoginForm" >
                <div className="l-title">
                    <h1>Sign in </h1>
                </div>
                <div className="FormControl">
                    <div className="input">
                        <label>Username</label>
                        <input type="text" defaultValue={this.props} />
                    </div>
                    <div className="input">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    
                </div>
                <div className="Submit">
                    <p>Signip to Coders-x</p>
                </div>
                <div className="KeepPass">
                    <input type="checkbox" />
                    <p>Keep me singed in</p>
                </div>
                <div className="HelpWes">
                    <p >Forgot username?</p>
                    <p >Forgot password?</p>
                </div>
            </div>
        )
    }
  };

export default LoginForm;