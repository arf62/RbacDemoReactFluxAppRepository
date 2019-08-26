import React from "react";
import { Link } from "react-router-dom";

function GeoResource() {
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
              <Link to="geochart">World chart</Link>
            </td>
            <td>Geography</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default GeoResource;
