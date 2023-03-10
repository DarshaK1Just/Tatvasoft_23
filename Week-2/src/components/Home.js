import React, { Component } from 'react';
import Userlist from './Userlist';
import HOC from './HOC';

const users = [
  { id: 12002080501007, name: 'Darshak' },
  { id: 12002080501002, name: 'Akshay' },
];

const UserListWithHOC = HOC(Userlist, { users });

class Home extends Component {
  render() {
    return (
      <div>
        <UserListWithHOC />
      </div>
    );
  }
}

export default Home;