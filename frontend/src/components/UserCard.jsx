import React from "react";


function UserCard ({user}) {


    return (
        <div className="infoCard">
            <div className="info-card-name">
            <h1>Name: {user.first_name}{user.last_name} </h1>
            </div>
            <div className="info-card-username">
            <h3>Username: {user.username} </h3>
            </div>
            <div className="info-card-profile-pic">
            <img src = {user.profile_pic} alt={user.username}/>
            </div>
        </div>
    )
}
export default UserCard;