import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NameForm from "./NameForm";
import React, {ReactElement} from "react";

Enzyme.configure({adapter: new Adapter()});

test("When user inputs price and submits then callback is executed", () => {
    const callback = jest.fn();
    const nameForm = shallow(<NameForm callback={callback}/>);
    nameForm.find(".input").simulate("change", {target: {value: 21}});
    nameForm.find(".button").simulate("click");
    expect(callback).toBeCalledWith(21);
})
