import React from "react";
import BalanceForm from "./BalanceForm";


type Props = { getValues: () => { date: Date, value: number }[], saveValues: (values: { date: Date, value: number }[]) => void };


class StatedBalanceForm extends React.Component<Props> {
    saveToMemory(valueFromBalanceForm: number): void {
        const valuesDatesFromMemory = this.props.getValues();
        const valueFromBalanceFormWithDate = {date: new Date(), value: valueFromBalanceForm};
        const valuesToMemory = [valueFromBalanceFormWithDate, ...valuesDatesFromMemory];
        this.props.saveValues(valuesToMemory);
    };

    constructor(props: Props) {
        super(props);
    };

    render() {
        return (
            <div>
                <BalanceForm callback={(value) => {
                    this.saveToMemory(value);
                }}/>
            </div>

        );
    }
}

export default StatedBalanceForm;

