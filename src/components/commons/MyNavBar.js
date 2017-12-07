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
        const currentRoute = routeArray.find((route) => {
            if (splitUrls[1]) {
                let regExp = null;
                if (route.path === '*') {
                    regExp = new RegExp('.*');
                } else {
                    regExp = new RegExp(route.name);
                }
                return regExp.test(splitUrls[1]);
            }
            return false;
        });
        const titleName = currentRoute && currentRoute.chsName;
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