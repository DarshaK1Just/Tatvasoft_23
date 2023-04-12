import React, { Component } from "react";
import axios from "axios";
import UserDetail from "./UserDetail";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserDetail user={user} key={user.id} />
        ))}
      </div>
    );
  }
}

export default Users;
