import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './RecommendedFriends.css';
import FollowFriendListItem from './FollowFriendListItem';
import avatar from '../image/reddit.png';
class RecommendedFriends extends Component {
    constructor(){
        super();
        this.friends = [
            {
              name : "Nguyễn Công Quyền",
              img : {avatar}
            },
            {
              name : "Nguyện Hoàng Quân",
              img : {avatar}
            },
            {
              name : "Nguyễn Thị Thủy Tiên",
              img : {avatar}
            }
          ];
    }
    render() {
        return (
            <div className="RecommendedFriends">
                <div className="header">
                  <div className="text-left">
                      <p>Gợi ý cho bạn</p>
                  </div>
                  <div className="text-right">
                      <p>Xem tất cả</p>
                  </div>
                </div>
                {this.friends .map((item,index) => {
                  return (<FollowFriendListItem name={item.name} key={index} img={item.img} />);
                })}
            </div>
        );
    }
  };

export default RecommendedFriends;