import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import UserCard from "../components/UserCard";
import { Row } from "reactstrap";

function UserPage() {
  const [allUsers, setAllUsers] = useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8000/api/users", {
      headers: {
        SameSite: "None",
      },
    });

    const data = await response.json();

    console.log("Data: ", data);
    const { users } = data;
    setAllUsers(users);
    console.log("Users: ", allUsers);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <h1>Users: </h1>
      <Row>
        {allUsers.length > 0 ? (
          allUsers.map((users) => <UserCard key={users.id} users={users} />)
        ) : (
          <Loader />
        )}
      </Row>
    </div>
  );
}

export default UserPage;
