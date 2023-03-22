import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, body, userId } = this.state;
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { title, body, userId } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className='d12' >
        <div >
          <label htmlFor="title">Title : </label>
          <input 
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body : </label>
          <textarea
            id="body"
            name="body"
            value={body}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="userId">User ID : </label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={userId}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit" className="b1">Submit</button>
      </form>
    );
  }
}

export default Post;
