import React , {useState} from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartNavItem from "../CartNavItem/CartNavItem";
import CartDropDown from "../CartDropDown/CartDropDown";
const Navbar = () => {
     var [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return(
    <div className="navbar-container">
        <div className="logo ">
        <Link to="/">
             <h1>Logo</h1>
        </Link>
             </div>
        <div className="shop flex">
     <Link to="/shop">
             <h3>Shop</h3>
        </Link>
             </div>
        <div onClick={ () => setIsDropdownOpen((prevState) => !prevState)} className="cart flex">
       <div>
       <CartNavItem isDropdownOpen={isDropdownOpen} /> 

        {isDropdownOpen && <CartDropDown/>   }
        </div>
             </div>
        <div className="user flex">
        <Link to="/auth">
             <h3>User</h3>
        </Link>
             </div>
    </div>
    );
}
export default Navbar;
