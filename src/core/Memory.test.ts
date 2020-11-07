import {getValues, saveValues, storageKey} from "./Memory";

beforeEach(() => {
    localStorage.clear();
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})

test('Test That Value Will Be Saved In LocalStorage', () => {
    const value = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];
    saveValues(value);
    expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, JSON.stringify(value));
    expect(localStorage.__STORE__[storageKey]).toBe(JSON.stringify(value));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
})

test("Test that Value Can Be Saved And Retrieved", () => {
    const value = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];
    saveValues(value);
    expect(getValues()).toEqual(JSON.parse(JSON.stringify(value)));
})
