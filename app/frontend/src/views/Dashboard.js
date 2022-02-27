import React from "react";
import NavBar from "../components/NavBar";

const Dashboard = () => {
    return (
        <div className="main">
            <NavBar/>
            <div className="content">
                <h1>Tinder but for your dog!!</h1>
                <p>
                    This gets your dog what they have been desperate for for so long. A best buddy!
                </p>
                <img src="https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2FphSxLtPuOSPsnJF0obkh5A%252FA_Friend_in_Need_1903_C.M.Coolidge.jpg&width=1200&quality=80" alt="dogs playing poker"/>
            </div>
        </div>
        
    )
}

export default Dashboard