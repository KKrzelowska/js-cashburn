import React from "react";
import NameForm from "./components/NameForm";
import Chart from "./components/Chart";


const App = () => (
    <div className="App">
        <NameForm callback={(number) => {
            alert(number);
        }}/>


       <Chart values={[[new Date("November 17, 2020 03:24:00"), 20.20],[new Date("November 17, 2020 06:24:00"), 20.20], [new Date("November 19, 2020 12:24:00"), 42.20],[new Date("November 20, 2020 12:24:00"), 53.20]]}/>

    </div>
);

export default App;
