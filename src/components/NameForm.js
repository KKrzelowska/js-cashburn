import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = () => this.setState({ value: event.target.value });
    this.handleSubmit = () => {
      alert("Amount: " + this.state.value);
      event.preventDefault();
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Podaj kwotę:
          <input
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
