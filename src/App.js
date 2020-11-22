import React from "react";
import NameForm from "./components/NameForm";
import Chart from "./components/Chart";
const App = () => (
    <div className="App">
        <NameForm callback={(number) => {
            alert(number);
        }}/>
        <Chart values ={[[new Date(1995,11,23), 22.20],[new Date(1995,11,27), 23.20]]}
/>
    </div>
);

export default App;
