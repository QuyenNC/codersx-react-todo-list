import React from 'react';


function Header(){
    return (
        <div className= "Header" >
            <div className="h-left">
                <i className="fas fa-long-arrow-alt-left"></i>
                <p>Go back</p>
            </div>
            <div className="h-center">
                <h1>Logo </h1>
            </div>
            <div className="h-right">
                <p>Sign up</p>
            </div>
        </div>
    )
}


export default Header;