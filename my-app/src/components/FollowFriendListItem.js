import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './FollowFriendListItem.css';
import PropTypes from 'prop-types';
class FollowFriendListItem extends Component {
    render() {
        const { name , img } = this.props;
        let  items = (
            <div className="FollowFriendListItem">
                <div className="box-left">
                    <div className="img">
                        <img src={img.avatar} alt=""/>
                    </div>
                    <div className="text">
                        <p>{name}</p>
                        <span>Gợi ý cho bạn</span>
                    </div>
                </div>
                <div className="box-right">
                    <p>Theo dõi</p>
                </div>
            </div>
        )
        return items;
    }
  };
  MyComponent.propTypes = {
    name:PropTypes.string,
    img:PropTypes.string
  };
export default FollowFriendListItem;