import {getValues, saveValues} from "./Memory";

beforeEach(() => {
    localStorage.clear();
})

const testValues = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];

test("Test that Value Can Be Saved And Retrieved", () => {
    saveValues(testValues);
    expect(getValues()).toEqual(testValues);
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})

test("Test that Saving uses local storage", () => {
    saveValues(testValues);

    expect(localStorage.setItem).toHaveBeenCalled();
})

test("Test that Loading uses local storage", () => {
    saveValues(testValues);
    getValues();

    expect(localStorage.getItem).toHaveBeenCalled();
})
