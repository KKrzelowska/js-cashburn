import React from "react";
import NameForm from "./components/NameForm";
import Chart from "./components/Chart";
import ComplexView from "./components/ComplexView";

const App = () => (
    <div className="App">
        <ComplexView  >{(callback)=>[<NameForm callback={callback}/>, <Chart values={[[new Date(), 20.20], [new Date(), 21.20]]}/>]}</ComplexView>
    </div>

);

export default App;
