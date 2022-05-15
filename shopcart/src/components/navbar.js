import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";


class NavBar extends React.Component {
    render(props) { 
        return (
        <div className="navbar bg-info">
            <h3 className="navbar-left mx-4 my-4">Shop to React</h3>
            <div className='navbar-right mx-4'>
            < FontAwesomeIcon icon={faShoppingCart} />
            <span>{this.props.sum} Item(s)</span> 
            </div>
        </div>
        );
    }
}
 
export default NavBar;