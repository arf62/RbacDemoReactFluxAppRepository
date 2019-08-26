import React from "react";

function RoleListView(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {props.roles.map(role => {
            return (
              <tr key={role.id}>
                <td>{role.roleName}</td>
                <td>{role.roleDepartment}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default RoleListView;
