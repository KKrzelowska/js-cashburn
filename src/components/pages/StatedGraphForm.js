import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import Chart from "../Chart";
import { StoreContext } from '../../storeContext';

const GraphForm = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <>
      <h1>GraphPage</h1>
      <Chart
        values={
          store.balance.map((x) => [new Date("December 1, 2020 03:24:00"), x]
        )}
      />
    </>
  )
  );
}

export default GraphForm;
