import React, { Component } from 'react';
import './ListTab.css';
class  ListTab extends Component {
    
    render() {
        let className = "asd";
        if(this.props.listTab.stt % 2 === 0){
            className += " is-even";
        }
        const items = (
                <tbody>
                    <tr className={className}>
                        <th>{this.props.listTab.stt}</th>
                        <td>{this.props.listTab.first}</td>
                        <td>{this.props.listTab.last}</td>
                        <td>{this.props.listTab.handle}</td>
                    </tr>
                </tbody>
        )
        return items;
    }
  };

export default ListTab;