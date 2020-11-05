import React from "react";
import NameForm from "./components/NameForm";
import Chart from "./components/Chart";

const App = () => (
    <div className="App">
        <NameForm callback={(number) => {
            alert(number);
        }}/>
        <Chart values ={[[new Date(), 20.20],[new Date(), 21.20]]}
/>
    </div>
);

export default App;
