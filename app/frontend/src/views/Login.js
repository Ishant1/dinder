import React from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

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