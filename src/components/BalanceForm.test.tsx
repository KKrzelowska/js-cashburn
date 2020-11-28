import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, {ReactElement} from "react";
import BalanceForm from "./BalanceForm";

Enzyme.configure({adapter: new Adapter()});

test("When user inputs price and submits then callback is executed", () => {
    const callback = jest.fn();
    const balanceForm = shallow(<BalanceForm callback={callback}/>);
    balanceForm.find(".input").simulate("change", {target: {value: 21}});
    balanceForm.find(".button").simulate("click");
    expect(callback).toBeCalledWith(21);
})
