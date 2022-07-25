import React from "react";



function UserCard ({users}) {


    return (
        <div className="infoCard">
            <div className="info-card-name">
            <h1> {users.first_name} {users.last_name} </h1>
            </div>
            <div className="info-card-username">
            <h3>@{users.username} </h3>
            </div>
            <div className="info-card-profile-pic">
            <img src = {users.profile_pic} alt={users.username}/>
            </div>
        </div>
    )
}
export default UserCard;