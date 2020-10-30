import React from "react";
import ReactDOM from "react-dom";

type PROPS = {callback: (arg:number) => void};
type STATE = {value:number};

class NameForm extends React.Component<PROPS, STATE> {
  handleChange: (event: any) => void;
  handleSubmit: () => void;
  state: { value: number };

  constructor(props: PROPS) {
    super(props);
    this.state = {value: 0};


    this.handleChange = (event: any) => this.setState({value: event.target.value});
    this.handleSubmit = () => {
      props.callback(this.state.value)
    };
  };


  render() {
    return (
        <div>
          <label>
            Podaj kwotę:
            <input
                className="input"
                type="number"
                value={this.state.value}
                onChange={this.handleChange}/>
            </label>
          <button className = "button" onClick = {() => this.handleSubmit()}>Zatwierdź</button>
        </div>

    );
  };
};
export default NameForm;