import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { NavBar } from 'antd-mobile';
import { routeArray } from '../../routes';

class MyNavBar extends Component {
    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        let splitUrls = this.props.history.location.pathname.split('/');
        const currentRoute = routeArray.filter((route) => {
            if (splitUrls) {
                return splitUrls[1] === route.name;
            } else {
                return false;
            }
        });
        const titleName = this.props.titleName || currentRoute.length > 0 ?  currentRoute[0].chsName : '未找到';
        return (
            <NavBar leftContent="后退"
                mode="dark"
                onLeftClick={this.handleGoBack}>
                {titleName}
            </NavBar>
        );
    }
}

export default withRouter(MyNavBar);