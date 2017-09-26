import React, { Component } from 'react';
import MyNavBar from './commons/MyNavBar';

export default class Expense extends Component {
    render() {
        return (
            <div className="App">
                <MyNavBar />
                <h2>Expense {this.props.match.params.branch}</h2>
            </div>
        );
    }
}