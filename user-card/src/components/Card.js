import React from "react";

const Card = props => {
  return (
    <div>
      <img src={props.avatar_url} alt={props.avatar_url} />
      <p>
        <strong>Username:</strong> {props.name}
      </p>
      <p>
        <strong>Bio:</strong> {props.bio}
      </p>
      <p>
        <strong>Github:</strong> {props.blog}
      </p>
    </div>
  );
};

export default Card;
