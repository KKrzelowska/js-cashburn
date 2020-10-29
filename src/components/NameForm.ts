import React from "react";
import ReactDOM from "react-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = (event) => this.setState({ value: event.target.value });
    this.handleSubmit = () => {
      props.callback(this.state.value)

    };
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit(this.props.callback)}>
          <label>

            Podaj kwotę:
          <input
              className="input"
              type="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="button" type="submit" value="Submit" />
        </form>
        <button variant="primary" >Navigate</button>{' '}
      </div>
    );
  }
}

export default NameForm;
