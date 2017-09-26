import React, { Component } from 'react';
import MyNavBar from './commons/MyNavBar';

export default class Notice extends Component {
    render() {
        return (
            <div className="App">
                <MyNavBar />
                <h2>Notice {this.props.match.params.branch}</h2>
            </div>
        );
    }
}