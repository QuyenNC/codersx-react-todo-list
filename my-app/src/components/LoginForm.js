import React from 'react';


function LoginForm(){
    return (
        <div className= "LoginForm" >
            <div className="l-title">
                <h1>Sign in</h1>
            </div>
            <div className="FormControl">
                <label>Username</label>
                <input type="text" />
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


export default LoginForm;