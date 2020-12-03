import React from "react";
import Chart from "../Chart";
let GraphForm = () => {
  return (
    <div>
      <h1>GraphPage</h1>
      <Chart
        values={[
          [new Date("December 17, 2020 03:24:00"), 20.2],
          [new Date("December 17, 2020 06:24:00"), 20.2],
          [new Date("December 19, 2020 12:24:00"), 42.2],
          [new Date("December 20, 2020 12:24:00"), 53.2],
        ]}
      />
    </div>
  );
}

export default GraphForm;
