import React from 'react';
import { Redirect } from 'react-router-dom';
import BalanceForm from './BalanceForm';
import BalanceService from './BalanceService';

type Props = { balanceService: BalanceService };
type State = { value: number; redirect: string };

class StatedBalanceForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: 0, redirect: '' };
  }

  render() {
    const callback = (value: number) => {
      this.props.balanceService.addBalance(value);
      this.setState({ redirect: '/graph' });
    };
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <BalanceForm callback={callback} />
      </div>
    );
  }
}

export default StatedBalanceForm;
