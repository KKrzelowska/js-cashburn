import React from 'react';
import BalanceForm from './BalanceForm';
import BalanceService from './BalanceService';
import RoutingService from './pages/Routing';

type Props = { balanceService: BalanceService };
type State = { value: number };

class StatedBalanceForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const callback = (value: number) => {
      this.props.balanceService.addBalance(value);
      RoutingService.instance.goToGraph();
    };
    return (
      <div>
        <BalanceForm callback={callback} />
      </div>
    );
  }
}

export default StatedBalanceForm;
