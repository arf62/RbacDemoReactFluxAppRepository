import React from "react";
import GeoResource from "../ResourceViews/GeoResource";
import FinResource from "../ResourceViews/FinResource";

function ResourceListView(props) {
  var showGeo = 0;
  var showFin = 0;

  function SetVisibility(role) {
    if (role.id === 1 || role.id === 3) {
      showGeo = 1;
    }
    if (role.id === 1 || role.id === 2) {
      showFin = 1;
    }
  }

  props.roles.map(role => {
    SetVisibility(role);
  });

  if (showGeo === 1 && showFin === 1) {
    return (
      <>
        <GeoResource />
        <FinResource />
      </>
    );
  } else if (showGeo === 1) {
    return <GeoResource />;
  } else if (showFin === 1) {
    return <FinResource />;
  }
  if (showGeo === 0 && showFin === 0) {
    return (
      <div>
        <h2>No Resources availbale </h2>
      </div>
    );
  }
}

export default ResourceListView;
