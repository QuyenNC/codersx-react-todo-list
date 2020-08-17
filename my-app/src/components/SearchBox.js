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
            const value  = event.target.value;
            this.setState({
                valText : this.valText(value.length,value.indexOf('090'))
            })
        };
    }
    valText(textInput,typeofInput){
        if(textInput > 10 || typeofInput !== 0  ){
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
                    <input className={classNames({valText:valText === false  })} type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Type something to search ..." onFocus={this.setStateFocus
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