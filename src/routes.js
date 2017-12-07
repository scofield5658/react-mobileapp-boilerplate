import React from 'react';
import { Switch, Route } from 'react-router';

import BasePage from './containers/BasePage';
import HomePage from './containers/HomePage';
import ExpensePage from './containers/ExpensePage';
import NoticePage from './containers/NoticePage';

export const routeArray = [
    {
        path: '/home',
        exact: true,
        replace: true,
        component: HomePage,
        name: 'home',
        chsName: '首页'
    }, {
        path: '/expense/:branch',
        exact: true,
        replace: false,
        component: ExpensePage,
        name: 'expense',
        chsName: '报销助手'
    }, {
        path: '/notice/:branch',
        exact: true,
        replace: false,
        component: NoticePage,
        name: 'notice',
        chsName: '通知助手'
    }, {
        path: '*',
        exact: false,
        replace: true,
        component: BasePage,
        name: 'notfound',
        chsName: '未找到'
    }
];

export default (
    <Switch>
        {routeArray.map((route,index) => {
            return <Route key={index} exact={route.exact} path={route.path} component={route.component} />;
        })}
    </Switch>
);
