import React from 'react'
import {Link, Switch, Route} from "react-router-dom";
import {
    useLocation,
    NavLink,
    Outlet,
    useSearchParams,
} from 'react-router-dom';
import About from "./pages/About";
import Landing from "./pages/Landing";
import Logo from "./Logo";
const Header = ()=>{
    const location = useLocation();
    return(
        <div>
        <nav>
            <div className="nav-wrapper purple darken-3 ">
                <a href="#!" data-target="mobile-demo" className="brand-logo" style={{marginLeft:"100px"}}>EduBot</a>
                <img src={require('../Assests/Images/edubBotLogo.gif')} width="auto" height="64" alt="loading..." />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About Us</Link>|{' '}
                    </li>
                    <li>
                        <Link to="/landing">User Guide</Link>
                    </li>

                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
            <li>
                <Link to="/about">About Us</Link>|{' '}
            </li>
            <li>
                <Link to="/landing">User Guide</Link>
            </li>

            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    </div>
    )
}
export default Header;
