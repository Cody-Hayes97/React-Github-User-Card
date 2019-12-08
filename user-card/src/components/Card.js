import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const UserCard = props => {
  return (
    <div
      style={{
        width: "30%",
        marginLeft: "33%"
      }}
    >
      <Card
        style={{
          borderRadius: "5%"
        }}
      >
        <CardImg
          style={{
            borderRadius: "5%",
            marginBottom: "3%"
          }}
          className="user-img"
          src={props.avatar_url}
          alt={props.avatar_url}
        />
        <CardBody
          style={{
            textAlign: "center"
          }}
        >
          <CardTitle
            style={{
              marginBottom: "5%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <strong>Username:</strong> {props.name}
          </CardTitle>
          <CardSubtitle
            style={{
              marginBottom: "5%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <strong>Github:</strong> {props.blog}
          </CardSubtitle>
          <CardText style={{ display: "flex", flexDirection: "column" }}>
            <strong>Bio:</strong> {props.bio}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
