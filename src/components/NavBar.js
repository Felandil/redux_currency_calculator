import React, { Component } from 'react';

class NavBar extends Component {
    render () {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Get Shares</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Markets</a></li>
                    </ul>
                </div>
            </div>
            </nav>
        );    
    }
}

export default NavBar;