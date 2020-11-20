import React from "react";

type Props = { children: (arg: any) => [object, object] };
type State = {
    isSwitched: boolean
};

class ComplexView extends React.Component<Props, State> {

    switchView(component_to_view: any) {
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

        const component_to_view = this.state.isSwitched == false ? (this.props.children(this.changeState)[0]) : (this.props.children(0)[1])
        return (
            <div>
                {this.switchView(component_to_view)}

            </div>
        )
    }
}

export default ComplexView;