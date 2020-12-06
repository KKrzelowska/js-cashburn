import React from 'react';
import BalanceForm from './BalanceForm';

type Props = {
  getValues: () => { date: Date; value: number }[];
  saveValues: (values: { date: Date; value: number }[]) => void;
};
type State = { value: number };

class StatedBalanceForm extends React.Component<Props, State> {
  save_to_memory(value_from_balanceform: number): void {
    var values_dates_from_memory = this.props.getValues();
    var value_from_balanceform_with_date = {
      date: new Date(),
      value: value_from_balanceform
    };
    var values_to_memory = [
      value_from_balanceform_with_date,
      ...values_dates_from_memory
    ];
    this.props.saveValues(values_to_memory);
  }

  constructor(props: Props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div>
        <BalanceForm
          callback={value => {
            this.save_to_memory(value);
          }}
        />
      </div>
    );
  }
}

export default StatedBalanceForm;
