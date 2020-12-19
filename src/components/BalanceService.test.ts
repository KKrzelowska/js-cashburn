import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import BalanceService from "./BalanceService";
import React from "react";
import MemoryService from "../core/MemoryService";

Enzyme.configure({adapter: new Adapter()});

beforeEach(() => {
    localStorage.clear();
})


test("Given empty storage when new balance is stored then it can be retrieved", () => {
    const getValues = jest.fn(() => []);
    const saveValues = jest.fn((value: number) => undefined);
    const balanceServiceForEmptyStorage = new BalanceService(MemoryService.instance);

    balanceServiceForEmptyStorage.addBalance(21);

    expect(balanceServiceForEmptyStorage.getBalances()).toHaveLength(1)
    expect(balanceServiceForEmptyStorage.getBalances()[0].value).toEqual(21);
    expect(balanceServiceForEmptyStorage.getBalances()[0].date.getTime()).toBeLessThanOrEqual(new Date().getTime())

})

test("Given populated storage when new balance is stored then it can be retrieved", () => {
    const getValues = jest.fn(() => []);
    const saveValues = jest.fn((value: number) => undefined);
    const balanceServiceForPopulatedStorage = new BalanceService(MemoryService.instance);

    balanceServiceForPopulatedStorage.addBalance(3);
    balanceServiceForPopulatedStorage.addBalance(22);
    balanceServiceForPopulatedStorage.addBalance(23);

    expect(balanceServiceForPopulatedStorage.getBalances()).toHaveLength(3);
    expect(balanceServiceForPopulatedStorage.getBalances()[1].value).toEqual(22);
    expect(balanceServiceForPopulatedStorage.getBalances()[1].date.getTime()).toBeLessThanOrEqual(new Date().getTime())

})
