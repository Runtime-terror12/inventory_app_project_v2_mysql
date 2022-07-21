import React from "react";


function InfoCard ({first_name, last_name, username, profile_pic}) {
    return (
        <div className="infoCard">
            <h1>Name: {first_name}{last_name} </h1>
            <h3>Username: {username} </h3>
            <img src = {profile_pic} />
        </div>
    )
}