import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, {ReactElement} from "react";
import StatedBalanceForm from "./StatedBalanceForm";
import {saveValues} from "../core/Memory";


Enzyme.configure({adapter: new Adapter()});

describe('StatedBalanceForm', () => {
    it('renders without crashing given the required props', () => {
        const save_value = jest.fn();
        const get_value = jest.fn();
        const wrapper = shallow(<StatedBalanceForm saveValues={save_value} getValues={get_value}/>);
        expect((wrapper)).toMatchSnapshot();
    })
})

test("When user inputs, then get_values is called ", () => {
    const save_value = jest.fn();
    const get_value = jest.fn(()=>[]);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={save_value} getValues={get_value}/>);
    StatedbalanceForm.find("button").simulate("click");
    expect(get_value).toBeCalled();
})

test("When user inputs, then save_value is called", () => {
    const save_value = jest.fn();
    const get_value = jest.fn(()=>[]);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={save_value} getValues={get_value}/>);
    StatedbalanceForm.find("button").simulate("click");
    expect(save_value).toBeCalled();
})

test("SaveValues save values to Memory's empty storage ", () => {
    const save_value = jest.fn();
    const get_value = jest.fn(()=>[]);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={save_value} getValues={get_value}/>);
    StatedbalanceForm.find("input").simulate("change", {target: {value: 21}});
    StatedbalanceForm.find("button").simulate("click");
    expect(save_value).toBeCalledWith([{"date": new Date(), "value": 21}]);
})

test("SaveValues save values to Memory's previous values ", () => {
    const save_value = jest.fn();
    const get_value = jest.fn(()=>[{"date": 12-21-2020, "value": 4}]);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={save_value} getValues={get_value}/>);
    StatedbalanceForm.find("input").simulate("change", {target: {value: 21}});
    StatedbalanceForm.find("button").simulate("click");
    expect(save_value).toBeCalledWith([{"date": new Date(), "value": 21}, {"date": 12-21-2020, "value": 4}]);
})