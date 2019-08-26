import React from "react";
import { Chart } from "react-google-charts";
function GeoChartView() {
  return (
    <>
      <Chart
        className="container-fluid"
        chartType="GeoChart"
        data={[
          ["Country", "Popularity"],
          ["Germany", 200],
          ["United States", 300],
          ["Brazil", 400],
          ["Canada", 500],
          ["France", 600],
          ["RU", 700]
        ]}
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
}

export default GeoChartView;
