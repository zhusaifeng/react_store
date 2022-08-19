import React, { Component } from 'react'
import './index.css'
import logo from './logo.ico'

export default class index extends Component {
render() {
    return (
        <div class="container">
        <div class="userinfo">
            <div class="center-container">
                <img src={logo} alt="logo" class="headphoto"/>
                <div style={{textAlign:"center"}}>用户名:朱赛峰<br/>信用分:80分</div>
            </div>
        </div>
        <div>
            <div class="setting">当前借阅<div class="arrow"></div></div>
            <div class="setting">借阅历史<div class="arrow"></div></div>
            <div class="setting">账号设置<div class="arrow"></div></div>
            <div class="setting">退出登录<div class="arrow"></div></div>
        </div>
    </div>
    )
}
}
