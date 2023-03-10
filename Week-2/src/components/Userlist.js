import React, { Component } from 'react';

class UserList extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className='dk1'>
        <table className='dk'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;