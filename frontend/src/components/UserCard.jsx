import React from "react";
// import LinkButton from "./productPage/LinkButton";
import { Link } from 'react-router-dom';



function UserCard ({users}) {


    return (
        <section className="card">
        <div className="infoCard">
            <div className="info-card-name">
            <h1 className="user-card-h1"> {users.first_name} {users.last_name} </h1>
            </div>
            <div className="info-card-username-div" >
            <h3 className="info-card-username">@{users.username} </h3>
            </div>
            <div className="info-card-profile-pic">
            <img className ="users-card-image" src = {users.profile_pic} alt={users.username}/>
            </div>
            <div className="more-info-button">
                <button>
                <Link to = {`/user/${users.id}`} > Details</Link>
                </button>
            </div>
        </div>
      </section>  
    )
}
export default UserCard;