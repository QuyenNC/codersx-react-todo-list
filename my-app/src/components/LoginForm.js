import React, { Component } from 'react';

class LoginForm extends Component {
    render() {
        const email = "abc@example.com";
        return (
            <div className= "LoginForm" >
                <div className="l-title">
                    <h1>Sign in </h1>
                </div>
                <div className="FormControl">
                    <label>Username</label>
                    <input type="text" value={this.props = email} />
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className="Submit">
                    <button>Signip to Coders-x</button>
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