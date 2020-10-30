import React from "react";
import ReactDOM from "react-dom";

type Props = { callback: (arg: number) => void };
type State = { value: number };

class NameForm extends React.Component<Props, State> {
    handleChange: (event: any) => void;
    handleSubmit: () => void;
    state: { value: number };

    constructor(props: Props) {
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
                </label>
                <input
                    className="input"
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange}/>
                <button className="button" onClick={this.handleSubmit()}>Zatwierdź</button>
            </div>

        );
    };
};
export default NameForm;