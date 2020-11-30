import React from "react";
import Chart from "./components/Chart";
import StatedBalanceForm from "./components/StatedBalanceForm";
import {getValues, saveValues} from "./core/Memory";

const App = () => (
    <div className="App">
        <StatedBalanceForm getValues={getValues} saveValues={saveValues}/>
        <Chart values={[[new Date(), 20.20], [new Date(), 21.20]]}/>
    </div>
);

export default App;
