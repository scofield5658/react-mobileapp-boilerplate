import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List } from 'antd-mobile';
import MyNavBar from './commons/MyNavBar';

const Item = List.Item;
const Brief = Item.Brief;

export default class Home extends Component {
    static propTypes = {
        onLogin: PropTypes.func.isRequired,
        onLogout: PropTypes.func.isRequired,
        pushRoute: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
        }
    }

    handleLogin = () => {
        this.props.onLogin({username: 'test', password: 'testpwd'});
    }

    handleLogout = () => {
        this.props.onLogout();
    }

    handleSelect = (pageName, branch) => {
        if (this.props.user.isLogin) {
            this.props.pushRoute(pageName + '/' + branch);
        }
    }

    render() {
        const loginBtnStyle = {
            marginTop: '30px'
        }
        const listStyle = {
            marginTop: '30px',
            textAlign: 'left'
        };
        const listTitle = this.props.user.isLogin
            ? <span>(用户: {this.props.user.username})</span>
            : <span>(请登录)</span>;
        return (
            <div className="App">
                <MyNavBar />
                    <div style={loginBtnStyle}>
                    {this.props.user.isLogin
                        ? <Button type="primary" inline size="small" onClick={this.handleLogout}>Logout</Button>
                        : <Button type="primary" inline size="small" onClick={this.handleLogin}>Login</Button>
                    }
                </div>
                <List style={listStyle} renderHeader={() => 
                    <div>
                        OA流程一览表
                        {listTitle}
                    </div>} >
                    <Item disabled={!this.props.user.isLogin} arrow="horizontal" multipleLine 
                        onClick={() => this.handleSelect('expense', 0)}>
                        报销助手
                        <Brief>Retail</Brief>
                    </Item>
                    <Item disabled={!this.props.user.isLogin} arrow="horizontal" multipleLine 
                        onClick={() => this.handleSelect('expense', 1)}>
                        报销助手
                        <Brief>Staff</Brief>
                    </Item>
                    <Item disabled={!this.props.user.isLogin} arrow="horizontal" multipleLine 
                        onClick={() => this.handleSelect('notice', 0)}>
                        通知助手
                        <Brief>Retail</Brief>
                    </Item>
                    <Item disabled={!this.props.user.isLogin} arrow="horizontal" multipleLine 
                        onClick={() => this.handleSelect('notice', 1)}>
                        通知助手
                        <Brief>Staff</Brief>
                    </Item>
                </List>
            </div>
        );
    }
}