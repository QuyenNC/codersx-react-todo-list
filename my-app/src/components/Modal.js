import React, { Component } from 'react';
import './Modal.css';
import classNames from 'classnames';
class Modal extends Component {
    render() {
        const { onclick , complete } = this.props; 
        let  items = (
            <div className="Modal">
                <button onClick={onclick} className={ classNames('openModal',{active:complete.isComplete === false})}> Open modal</button>
                <div  id="myModal" className={classNames('modal',{active:complete.isComplete === true})}>
                    <div className="modal-content">
                        <div className="header">
                            <h1>This is a modal 1</h1>
                            <span className="close" onClick={onclick}>&times;</span>
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab
                            oris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volupta
                            te velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud e
                            xercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vol
                            uptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp
                            a qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam
                            co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                            in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="fotter">
                            <div className="btn">
                                <button onClick={onclick}>Accept</button>
                                <button onClick={onclick}>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
        return items;
    }
  };

export default Modal;