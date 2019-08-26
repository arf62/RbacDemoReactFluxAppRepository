import React, { useState } from "react";
import ResourceListView from "../views/ResourceListView";
import LoginCheck from "../common/LoginCheck";
import sessionStore from "../../stores/sessionStore";

function HomePage(props) {
  const [roles, setRoles] = useState([]);
  LoginCheck(props);
  const userid =
    sessionStore.getSession() === undefined ? 0 : sessionStore.getSession().id;
  if (userid > 0) {
    fetch(
      "http://ec2-18-191-63-32.us-east-2.compute.amazonaws.com:80/users/" +
        `${userid}` +
        "/roles"
    )
      .then(response => response.json())
      .then(json => {
        setRoles(json._embedded.roles);
      });
  }
  return (
    <>
      <div className="jumbotron">
        <h1> Role Based Access Control Demo</h1>
      </div>
      <ResourceListView session={sessionStore.getSession()} roles={roles} />
    </>
  );
}

export default HomePage;
