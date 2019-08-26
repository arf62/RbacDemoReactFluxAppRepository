import React from "react";
import { Link } from "react-router-dom";

function FinResource() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Resource Name</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          <tr key="1">
            <td>
              <Link to="finchart">Finance Chart</Link>
            </td>
            <td>Finance</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FinResource;
