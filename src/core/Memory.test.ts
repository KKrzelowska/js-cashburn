import {getValues, saveValues, storageKey} from "./Memory";

const CORRECT_VALUE_TO_SAVE = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];

beforeEach(() => {
    localStorage.clear();
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})

test('When saveValues is executed Then data should be saved in localstorage', () => {
    saveValues(CORRECT_VALUE_TO_SAVE);
    expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, JSON.stringify(CORRECT_VALUE_TO_SAVE));
    expect(localStorage.__STORE__[storageKey]).toBe(JSON.stringify(CORRECT_VALUE_TO_SAVE));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
})

test("Test that Value Can Be Saved And Retrieved", () => {
    saveValues(CORRECT_VALUE_TO_SAVE);
    expect(getValues()).toEqual(CORRECT_VALUE_TO_SAVE);
})
