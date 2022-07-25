import React from "react";
import "./UpdateUser.css";
import { useParams } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";

function UpdateUser() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="update-user-container">
        <h2>Update User: </h2>
        <UserForm userId={id} />
      </div>
    </div>
  );
}

export default UpdateUser;
