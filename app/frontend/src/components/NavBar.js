import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        <div className="navbar">
            <h1 className="logo" >Dinder</h1>
            <div className="right-content">
            <div className="links">
                <ul>
                    <li><Link to={"/browse"}>Find Matches</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                </ul>
            </div>
            {isAuthenticated &&
                <>Hi, {user.name}</>
            }
            

            <AuthButton />
            
            </div>
            
        </div>
    )
}

export default NavBar;