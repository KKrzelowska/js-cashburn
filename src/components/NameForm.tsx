import React, {ChangeEventHandler, EventHandler, FormEventHandler, MouseEventHandler, SyntheticEvent} from "react";
import ReactDOM from "react-dom";

type Props = { callback: (arg: number) => void };
type State = { value: number };

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
                <label>
                    Podaj kwotę:
                </label>
                <input
                    className="input"
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <button className="button" onClick={this.handleSubmit}>Zatwierdź</button>
            </div>

        );
    };
};
export default NameForm;