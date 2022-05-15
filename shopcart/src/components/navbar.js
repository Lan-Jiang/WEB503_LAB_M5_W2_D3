import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart,faRegistered } from "@fortawesome/free-solid-svg-icons";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
// import DisplayProduct from "./components/displayproducts";

class NavBar extends React.Component {
    render(props) { 
        return (
        <Router>
        <div className="navbar bg-info">
            <h3 className="navbar-left mx-4 my-4 text-white">Shop 2 <Link to="/"><FontAwesomeIcon icon={faRegistered} /></Link>eact</h3>
            <div className='navbar-right mx-4'>
            <Link to="/showCart">< FontAwesomeIcon icon={faShoppingCart} /></Link>
            <span> {this.props.sum} Item(s)</span> 
            </div>
        </div>

        <Routes>
            <Route
                path="/"
                element={
                 <div>
                     <p></p>
                 </div>
                }
            />
        </Routes>
        </Router>
        );
    }
}
 
export default NavBar;