import React from "react";
import AuthButton from "./AuthButton";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {

    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className="navbar">
            <h1>Dinder</h1>
            <AuthButton />
            {isAuthenticated &&
                <>Hi, {user.name}</>
            }
        </div>
    )
}

export default NavBar;