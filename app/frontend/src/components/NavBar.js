import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="logo"/>
                <h1 >Dinder</h1>
            </div>
            <div className="right-content">
            <div className="links">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/browse"}>Find Matches</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/signup"}>AI Bio - Signup</Link></li>
                </ul>
            </div>
            <div className="other-stuff">
                {isAuthenticated &&
                    <>Hi, {user.name}</>
                }
                <AuthButton />
            </div>
            
            </div>
            
        </div>
    )
}

export default NavBar;