import React, {
    ChangeEventHandler,
    EventHandler,
    FormEventHandler,
    MouseEventHandler,
    SyntheticEvent,
    useCallback
} from "react";
import ReactDOM from "react-dom";
import {shallow} from "enzyme";

type Props = { children: (arg: any) => [object, object] };
type State = {
    value: boolean
};

class ComplexView extends React.Component<Props, State> {
    changeview: any;
    changestate: any
    checkChildrenCallback: any;

    constructor(props: Props) {
        super(props);
        this.state = {
            value: false,
        };

        this.changestate = () => {
            this.setState({value: true})};

        this.checkChildrenCallback = () => {
            this.changestate();
        }
        this.changeview = () => this.state.value == false ?
            (this.props.children(this.checkChildrenCallback)[0]) : (this.props.children(0)[1]);

    }


    render() {
        return (
            <div>
                {this.changeview()}

            </div>
        )
    }
}

export default ComplexView;