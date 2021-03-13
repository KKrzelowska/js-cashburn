import React, { ReactElement } from 'react';

import ChartFunctional from '../ChartFunctional';
const GraphForm = (): ReactElement => {
  return (
    <div>
      <h1>GraphPage</h1>
      <ChartFunctional
        values={[
          { date: new Date('December 17, 2020 03:24:00'), value: 20.2 },
          { date: new Date('December 17, 2020 06:24:00'), value: 20.2 },
          { date: new Date('December 19, 2020 12:24:00'), value: 42.2 },
          { date: new Date('December 20, 2020 12:24:00'), value: 53.2 }
        ]}
      />
    </div>
  );
};

export default GraphForm;
