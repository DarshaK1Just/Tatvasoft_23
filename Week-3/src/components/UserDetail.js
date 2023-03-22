import React from "react";

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserDetail;
