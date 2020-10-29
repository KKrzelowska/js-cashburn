import React from "react";
import ReactDOM from "react-dom";

type PROPS = {callback: (arg:number) => void};
type STATE = {value:number};

class NameForm extends React.Component<PROPS, STATE> {
  handleChange: (event: any) => void ;
  handleSubmit: () => void ;
  state:{value:number};

  constructor(props: PROPS) {
    super(props);
    this.state = { value: 0 };



    this.handleChange = (event: any) => this.setState({ value: event.target.value });
    this.handleSubmit = () => {
      props.callback(this.state.value)
    };
  }

  render() {
    return (
      <div>

        <form onSubmit={(e)=>{this.handleSubmit(); e.stopPropagation()}}>
          <label >

            Podaj kwotę:
          <input
              className = "input"
              type = "number"
              value = {this.state.value}
              onChange = {this.handleChange}
            />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NameForm;
