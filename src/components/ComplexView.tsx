import React from "react";

type Props = { children: (arg: () => void) => [JSX.Element, JSX.Element] };
type State = {
    isSwitched: boolean
};

class ComplexView extends React.Component<Props, State> {

    switchView(component_to_view: JSX.Element) {
        return component_to_view
    }
    changeState = () => {this.setState({isSwitched: true})}

    constructor(props: Props) {
        super(props);
        this.state = {
            isSwitched: false,
        };
    }

    render() {

        const [first_display, second_display] = this.props.children(this.changeState);
        const component_to_view = this.state.isSwitched == false ? first_display : second_display;
        return (
            <div>
                {this.switchView(component_to_view)}
            </div>
        )
    }
}

export default ComplexView;