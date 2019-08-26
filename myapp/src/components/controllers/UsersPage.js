import React, { useState, useEffect } from "react";
import UserListView from "../views/UserListView";
import LoginCheck from "../common/LoginCheck";

function UsersPage(props) {
  const [users, setUsers] = useState([]);

  LoginCheck(props);

  useEffect(() => {
    fetch("http://ec2-18-191-63-32.us-east-2.compute.amazonaws.com:80/users")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setUsers(json._embedded.users);
      });
  }, []);

  return (
    <>
      <h2>Available Users</h2>
      <UserListView users={users} />
    </>
  );
}

export default UsersPage;
