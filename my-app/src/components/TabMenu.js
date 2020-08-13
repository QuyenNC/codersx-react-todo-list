import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './TabMenu.css';
class TabMenu extends Component {
    render() {
        let  items = (
            <div className="TabMenu">
                <div className="Menu-1 Active">
                    <i className="fa fa-fw fa-home"></i>
                    <p>HOME</p>
                    </div> 
                {this.props.items.map(x =>
                    <div className="Menu-1 ">
                        <i className={x.classNames}></i>
                        <p>{x.label}</p>
                    </div> 
                )}
            </div>
        )
        return items;
    }
  };

export default TabMenu;