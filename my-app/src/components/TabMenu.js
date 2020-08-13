import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './TabMenu.css';

function TabMenu(){
    return (
        <div className="TabMenu">
            <div className="Menu-1 Active">
                <i className="fa fa-fw fa-home"></i>
                <p>HOME</p>
            </div>
            <div className="Menu-1">
            <i className="fa fa-fw fa-search"></i>
                <p>SEARCH</p>
            </div>
            <div className="Menu-1">
            <i className="fa fa-fw fa-envelope"></i>
                <p>CONTACT</p>
            </div>
            <div className="Menu-1">
            <i className="fa fa-fw fa-user"></i>
                <p>LOGIN</p>
            </div>
        </div>
    )
}


export default TabMenu;