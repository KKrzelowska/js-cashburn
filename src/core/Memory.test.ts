import {getValues, saveValues} from "./Memory";

test("Test that Value Can Be Saved And Retrieved", () => {
    const value = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];
    saveValues(value);
    expect(getValues()).toEqual(value);
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})
