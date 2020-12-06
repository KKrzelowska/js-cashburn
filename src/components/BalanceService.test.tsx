import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import BalanceService from "./BalanceService";
import React from "react";

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
    localStorage.clear();
})


test("Given empty storage when new balance is stored then it can be retrieved", () => {
    const getValues = jest.fn(() => []);
    const saveValues = jest.fn((value: number) => undefined);
    const balanceServiceForEmptyStorage = new BalanceService();

    balanceServiceForEmptyStorage.addBalance(21);

    expect(balanceServiceForEmptyStorage.balances).toHaveLength(1)
    expect(balanceServiceForEmptyStorage.balances[0].value).toEqual(21);
    expect(balanceServiceForEmptyStorage.balances[0].date.getTime()).toBeLessThanOrEqual(new Date().getTime())

})

test("Given populated storage when new balance is stored then it can be retrieved", () => {
    const getValues = jest.fn(() => []);

    const saveValues = jest.fn((value: number) => undefined);
    const balanceServiceForPopulatedStorage = new BalanceService();

    balanceServiceForPopulatedStorage.addBalance(3);
    balanceServiceForPopulatedStorage.addBalance(22);
    balanceServiceForPopulatedStorage.addBalance(23);

    expect(balanceServiceForPopulatedStorage.balances).toHaveLength(3);
    expect(balanceServiceForPopulatedStorage.balances[1].value).toEqual(22);
    expect(balanceServiceForPopulatedStorage.balances[1].date.getTime()).toBeLessThanOrEqual(new Date().getTime())

})