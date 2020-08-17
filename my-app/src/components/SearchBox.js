import React, { Component } from 'react';
import './SearchBox.css';
import search from '../image/search.png';
class SearchBox extends Component {
    constructor(){
        super();
        this.state={
            isFocused : true
        };
        this.setStateFocus =  () => {
            this.setState({
                isFocused : this.showIconSearch(this.state.isFocused)
            })
        };
    }
    showIconSearch(isFocus){
        switch(isFocus){
            case true :
                return false;
            case false :
                return true;
            default:
                return true;
        }
    };
    render() {
        const {isFocused} = this.state;
        let  items = (
            <div className="SearchBox">
                <div className="inputBox">
                    <input type="text" placeholder="Type something to search ..." onFocus={this.setStateFocus
                       } onBlur={this.setStateFocus} />
                    {isFocused === true && 
                        <div className="icon" >
                            <img src={search} alt="search"/>
                        </div> 
                    }
                </div>
            </div>
        )
        return items;
    }
  };
export default SearchBox;