import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
    <div className="navbar-container">
        <div className="logo ">
        <NavLink to="/">
             <h1>Logo</h1>
        </NavLink>
             </div>
        <div className="shop flex">
        <NavLink to="/shop">
             <h3>Shop</h3>
        </NavLink>
             </div>
        <div className="cart flex">
        <NavLink to="/checkout">
             <h3>Cart</h3>
        </NavLink>
             </div>
        <div className="user flex">
        <NavLink to="/auth">
             <h3>User</h3>
        </NavLink>
             </div>
    </div>
    );
}
export default Navbar;
