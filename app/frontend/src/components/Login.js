import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Login = () => {
    return (
        <div className="login">
            <h1>login page</h1>
                <LoginButton/>
                <LogoutButton/>
        </div>
        
    )
}

export default Login