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
            this.state.value == false ? this.setState({value: true}) : this.setState({value: false})
        }
        this.checkChildrenCallback = () => {
            this.changestate();
        }

    }


    render() {
        return (
            <div>
                {this.changeview = this.state.value == false ?
                    (this.props.children(this.checkChildrenCallback)[0]) : (this.props.children(0)[1])}

            </div>
        )
    }
}

export default ComplexView;