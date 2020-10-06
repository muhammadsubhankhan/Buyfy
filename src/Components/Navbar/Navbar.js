import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return(
    <div className="navbar-container">
        <div className="logo "> <h1>Logo</h1></div>
        <div className="shop flex"> <h3>Shop</h3></div>
        <div className="cart flex"> <h3>Cart</h3></div>
        <div className="user flex"> <h3>User</h3></div>
    </div>
    );
}
export default Navbar;
