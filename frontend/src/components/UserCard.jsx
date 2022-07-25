import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";

function UserCard({ users }) {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardImg
          alt={users.username}
          src={users.profile_pic}
          top
          width="100%"
        />
        <CardTitle tag="h5">
          {users.first_name} {users.last_name}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {users.username}
        </CardSubtitle>
        <Button color="primary" href={`/user/${users.id}`}>
          Details
        </Button>
      </CardBody>
    </Card>
  );
}
export default UserCard;
