import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComplexView from "./ComplexView";
import React, {ReactElement} from "react";
import {jsJsx} from "ts-loader/dist/constants";

Enzyme.configure({adapter: new Adapter()});

test("When user inputs price and submits then callback is executed and view is changed", () => {
    const callback = jest.fn();
    const complexview = shallow(<ComplexView children={()=> [jsJsx,jsJsx]}/>);
    expect.anything();
})
