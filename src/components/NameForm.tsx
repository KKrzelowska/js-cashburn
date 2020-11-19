import React, {ChangeEventHandler, EventHandler, FormEventHandler, MouseEventHandler, SyntheticEvent} from "react";
import ReactDOM from "react-dom";
import styled, {keyframes} from "styled-components";

type Props = { callback: (arg: number) => void };
type State = { value: number };


const Button = styled.button`
display: inline-block;
background: papayawhip;
padding: 0.5em;
margin: 0.5em;
border: none;
color: palevioletred;
  font-weight: bold;`

const Label = styled.label`
color: palevioletred;
font-weight: bold;`

const Input = styled.input`
color: palevioletred;
font-weight: bold;
padding: 0.5em;
margin: 0.5em;
background: papayawhip;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

class NameForm extends React.Component<Props, State> {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
    state: { value: number };

    constructor(props: Props) {
        super(props);
        this.state = {value: 0};

        this.handleChange = (event) => this.setState({value: parseInt(event.target.value)});
        this.handleSubmit = () => props.callback(this.state.value);
    };

    render() {
        return (
            <div>
                <Label>
                    Podaj kwotę:
                </Label>
                <Input
                    className="input"
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <Button onClick={this.handleSubmit}>Zatwierdź</Button>
                <Rotate>Hedgehog</Rotate>
            </div>

        );
    };
};
export default NameForm;