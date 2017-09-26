import React, { Component } from 'react';
import MyNavBar from './commons/MyNavBar';

export default class Base extends Component {
    render() {
        return (
            <div className="App">
                <MyNavBar />
            </div>
        );
    }
}