import React from 'react';
import './Header.css';

function Header(){
    return (
        <div className= "Header" >
            <div className="h-left">
                <p>Go back</p>
            </div>
            <div className="h-center">
                <h1>Logo </h1>
            </div>
            <div className="h-right">
                <p>Sign up</p>
            </div>
        </div>
    );
}


export default Header;