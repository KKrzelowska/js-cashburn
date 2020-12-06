import React from 'react';
import Chart from './components/Chart';
import StatedBalanceForm from './components/StatedBalanceForm';
import { getValues, saveValues } from './core/Memory';

const App = () => (
  <div className="App">
    <StatedBalanceForm getValues={getValues} saveValues={saveValues} />

    <Chart
      values={[
        [new Date('November 17, 2020 03:24:00'), 20.2],
        [new Date("November 17, 2020 06:24:00"), 20.2],
        [new Date("November 19, 2020 12:24:00"), 42.2],
        [new Date("November 20, 2020 12:24:00"), 53.2]
      ]}
    />
  </div>
);

export default App;
