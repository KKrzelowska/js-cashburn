import React from "react";
import NameForm from "./components/NameForm1";
import Chart from "./components/Chart";

const App = () => (
    <div className="App">
        <NameForm callback={(number) => {
            alert(number);
        }}/>
        <Chart/>
    </div>
);

export default App;
