import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import money from '../img/money.png';
import {
  Button,
  Input,
  Label,
  PageBox,
  Container,
  Img
} from '../styled/styledBalanceForm';

type Props = { callback: (value: number) => void };
type State = { value: number };

class BalanceForm extends React.Component<Props, State> {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  state: { value: number };

  constructor(props: Props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = event =>
      this.setState({ value: parseInt(event.target.value) });
    this.handleSubmit = () => props.callback(this.state.value);
  }

  render() {
    return (
      <Container>
        <PageBox>
          <Img src={money} alt={`money icon`} />
          <Label>Ustaw saldo dla gotówki</Label>
          <Label className="subtitle">
            Ile pieniędzy faktycznie posiadasz w portfelu?
          </Label>
          <Input
            className="input"
            type="number"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Button className="button" onClick={this.handleSubmit}>
            ZATWIERDŹ
          </Button>
        </PageBox>
      </Container>
    );
  }
}
export default BalanceForm;
