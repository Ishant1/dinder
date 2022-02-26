import React from "react";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className="navbar">
            <h1 className="logo" >Dinder</h1>
            <div className="right-content">
            {isAuthenticated &&
                <>Hi, {user.name}</>
            }
            <div className="links">
                <li>
                    <Link to={"/browse"}>Find Matches</Link>
                </li>
            </div>
            <AuthButton />
            
            </div>
            
        </div>
    )
}

export default NavBar;