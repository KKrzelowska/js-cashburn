import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React, {ReactElement} from "react";
import StatedBalanceForm from "./StatedBalanceForm";
import {saveValues} from "../core/Memory";


Enzyme.configure({adapter: new Adapter()});

describe('StatedBalanceForm', () => {
    it('renders without crashing given the required props', () => {
        const saveValueFromMemory = jest.fn();
        const getValueFromMemory = jest.fn();
        const wrapper = shallow(<StatedBalanceForm saveValues={saveValueFromMemory} getValues={getValueFromMemory}/>);

        expect((wrapper)).toMatchSnapshot();
    })
})

test("When user submits balanceform, then get_values is called ", () => {
    const saveValueFromMemory = jest.fn();
    const getValueFromMemory = jest.fn(() => []);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={saveValueFromMemory}
                                                       getValues={getValueFromMemory}/>);

    StatedbalanceForm.find("button").simulate("click");

    expect(getValueFromMemory).toBeCalled();
})

test("When user submits balanceform, then save_value is called", () => {
    const saveValueFromMemory = jest.fn();
    const getValueFromMemory = jest.fn(() => []);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={saveValueFromMemory}
                                                       getValues={getValueFromMemory}/>);

    StatedbalanceForm.find("button").simulate("click");

    expect(saveValueFromMemory).toBeCalled();
})

test("Given empty storage when new balance is stored then it can be retrieved", () => {
    const saveValueFromMemory = jest.fn();
    const getValueFromMemory = jest.fn(() => []);
    const currentDate = new Date();
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={saveValueFromMemory}
                                                       getValues={getValueFromMemory}/>);

    StatedbalanceForm.find("input").simulate("change", {target: {value: 21}});
    StatedbalanceForm.find("button").simulate("click");
    const {date, value}: { date: Date, value: number } = saveValueFromMemory.mock.calls[0][0][0];

    expect(date.getTime()).toBeGreaterThan(currentDate.getTime())
    expect(value).toEqual(21)
})

test("Given populated storage when new balance is stored then old one and new one can be retrieved in order", () => {
    const saveValueFromMemory = jest.fn();
    const currentDate = new Date();
    const getValueFromMemory = jest.fn(() => [{date: currentDate, value: 4}]);
    const StatedbalanceForm = mount(<StatedBalanceForm saveValues={saveValueFromMemory}
                                                       getValues={getValueFromMemory}/>);

    StatedbalanceForm.find("input").simulate("change", {target: {value: 21}});
    StatedbalanceForm.find("button").simulate("click");
    const values: { date: Date, value: number }[] = saveValueFromMemory.mock.calls[0][0];

    expect((values[0].date).getTime()).toBeLessThanOrEqual(new Date().getTime());
    expect(values[1].date).toEqual(currentDate);
    expect(values[0].value).toEqual(21);
    expect(values[1].value).toEqual(4);
})