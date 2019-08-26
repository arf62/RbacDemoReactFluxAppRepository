import React from "react";

function UserListView(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.userName}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserListView;
