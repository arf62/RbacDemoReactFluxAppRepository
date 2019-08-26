import React, { useState, useEffect } from "react";
import RoleListView from "../views/RoleListView";
import LoginCheck from "../common/LoginCheck";

function RolesPage(props) {
  const [roles, setRoles] = useState([]);

  LoginCheck(props);

  useEffect(() => {
    fetch("http://ec2-18-191-63-32.us-east-2.compute.amazonaws.com:80/roles")
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setRoles(json._embedded.roles);
      });
  }, []);

  return (
    <>
      <h2>Available Roles</h2>
      <RoleListView roles={roles} />
    </>
  );
}

export default RolesPage;
