import React from "react";
import NameForm from "./components/NameForm";

const App = () => (
    <div className="App">
        <NameForm callback={(number) => {
            alert(number);
        }}/>
    </div>
);

export default App;
