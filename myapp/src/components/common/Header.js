import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };

  return (
    <nav>
      <NavLink activeStyle={activeStyle} exact to="/home">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/about">
        About
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/users">
        Users
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/roles">
        Roles
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeStyle} to="/logout">
        Log Out
      </NavLink>
    </nav>
  );
}

export default Header;
