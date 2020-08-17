import React, { Component } from 'react';
import './SearchBox.css';
import search from '../image/search.png';
import classNames from 'classnames';
class SearchBox extends Component {
    constructor(){
        super();
        this.state={
            isFocused : false,
            valText : true
        };
        this.setStateFocus =  () => {
            this.setState({
                isFocused : this.showIconSearch(this.state.isFocused)
            })
        };
        this.valTextInput = (event) => {
            this.setState({
                valText : this.valText(event.target.value.length)
            })
        };
    }
    valText(textInput){
        console.log(textInput);
        if(textInput > 10){
            return false;
        }
        
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
        const {isFocused ,valText} = this.state;
        let  items = (
            <div className="SearchBox">
                <div className="inputBox">
                    <input className={classNames({valText:valText === false  })} type="text" placeholder="Type something to search ..." onFocus={this.setStateFocus
                       } onBlur={this.setStateFocus} onKeyUp={this.valTextInput } />
                    {isFocused === false && 
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