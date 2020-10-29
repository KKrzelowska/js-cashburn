import { getValues, saveValues, addArray } from "./Memory";

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})

test("Test that Value Can Be Saved And Retrieved", () => {
    const value = [{ date: new Date(), value: 21 }, { date: new Date(), value: 48 }];
    saveValues(value);
    expect(getValues()).toEqual(value);
})


test("Adding two arrays works", () => {
    const array_1 = [1, 2]
    const array_2 = ['siema', 'locho'];
    expect(addArray(array_1, array_2)).toEqual([1,2,'siema','locho'])
})