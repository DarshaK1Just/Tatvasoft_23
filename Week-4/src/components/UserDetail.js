import React from 'react';

const UserDetail = React.memo(({ user }) => {
  console.log('UserDetail rendering for', user.name);
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email : {user.email}</p>
      <p>Phone : {user.phone}</p>
    </div>
  );
});

export default UserDetail;
