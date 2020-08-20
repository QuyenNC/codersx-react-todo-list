import React, { Component } from 'react';
import './Modal.css';
import classNames from 'classnames';
class Modal extends Component {
    render() {
        const { onclick , complete ,children } = this.props; 
        console.log(children);
        let  items = (
                <div  id="myModal" className={classNames('modal',{active:complete.isComplete === true})}>
                    <div className="modal-content">
                        <div className="header">
                            {children[0]}
                            <span className="close" onClick={onclick}>&times;</span>
                        </div>
                        <div className="text">
                            {children[1]}
                        </div>
                        <div className="fotter">
                            <div className="btn">
                                <button onClick={onclick}>Accept</button>
                                <button onClick={onclick}>Decline</button>
                            </div>
                        </div>
                    </div>
                </div> 
        )
        return items;
    }
  };

export default Modal;