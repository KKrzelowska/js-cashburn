import React, {
  ChangeEventHandler,
  EventHandler,
  FormEventHandler,
  MouseEventHandler,
  SyntheticEvent,
} from "react";
import ReactDOM from "react-dom";

import { Input, Button, Label } from "../styled/styledNameForm";

type Props = { callback: (arg: number) => void };
type State = { value: number };

class NameForm extends React.Component<Props, State> {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  state: { value: number };

  constructor(props: Props) {
    super(props);
    this.state = { value: 0 };

    this.handleChange = (event) =>
      this.setState({ value: parseInt(event.target.value) });
    this.handleSubmit = () => props.callback(this.state.value);
  }

  render() {
    return (
      <div>
        <Label>Podaj kwotę:</Label>
        <Input
          className="input"
          type="number"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmit}>Zatwierdź</Button>
      </div>
    );
  }
}
export default NameForm;

