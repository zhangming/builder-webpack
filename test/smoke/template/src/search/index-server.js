'use strict';

// import React from 'react';
// import ReactDom from 'react-dom';
// import logo from './images/logo.png';
// import './search.less';
// import largeNumber from 'large-number-meg';
const React = require('react');
const largeNumber = require('large-number-meg');
const logo = require('./images/logo.png');
const s = require('./search.less');


class Search extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            Text: null
        };
    }
    loadComponent() {
        import('./text.js').then( (Text)=>{
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        const { Text } = this.state;
        const addResult = largeNumber('123','329');
        
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            {addResult}
            搜索文字,哈哈哈<img src={ logo }  onClick={ this.loadComponent.bind(this) }/>
            </div>;
    }
}

module.exports = <Search />;
    

