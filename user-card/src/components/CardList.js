import React from "react";
import axios from "axios";
import Card from "./Card";
// import FollowerCard from "./FollowerCard";

class CardList extends React.Component {
  state = {
    users: [],
    // followers: [],
    userText: ""
  };

  gitPage = "https://api.github.com/users/";
  me = "Cody-Hayes97";

  followersArray = [
    "tetondan",
    "dustinmyers",
    "justsml",
    "luishrd",
    "bigknell"
  ];
  componentDidMount() {
    axios
      .get(this.gitPage + this.me)

      .then(res => {
        console.log(res);
        this.setState({
          users: [res.data]
        });
      })
      .catch(err => {
        console.log("axios: ", err);
      });

    // axios
    //   .get("https://api.github.com/users/Cody-Hayes97/followers")

    //   .then(response => {
    //     console.log(response);
    //     this.setState({
    //       followers: [response.data]
    //     });
    //   })
    //   .catch(err => {
    //     console.log("axios: ", err);
    //   });
  }

  handleFollowers = e => {
    e.preventDefault();
    axios
      .get("https://api.github.com/users/Cody-Hayes97/followers")
      .then(res => {
        console.log("button click : ", res);
        this.setState({
          users: [res.data[0]]
        });
      })
      .catch(err => {
        console.log("button clicked: ", err);
      });
  };

  goHome = e => {
    e.preventDefault();
    axios
      .get("https://api.github.com/users/Cody-Hayes97")
      .then(res => {
        console.log("button click : ", res);
        this.setState({
          users: [res.data]
        });
      })
      .catch(err => {
        console.log("button clicked: ", err);
      });
  };

  render() {
    console.log("stateful: ", this.state.users);
    console.log("stateful follows: ", this.state.followers);
    return (
      <div>
        <button onClick={this.handleFollowers}>See Codys Followers</button>

        {this.state.users.map(user => (
          <Card
            avatar_url={user.avatar_url}
            key={user.id}
            name={user.login}
            bio={user.bio}
            blog={user.html_url}
          />
        ))}

        <button onClick={this.goHome}>Home</button>
        <div>
          {/* {this.state.followers.map(follower => (
            <FollowerCard
              avatar_url={follower.avatar_url}
              key={Date.now()}
              login={follower.login}
              html_url={follower.html_url}
            />
          ))} */}
        </div>
      </div>
    );
  }
}

export default CardList;
