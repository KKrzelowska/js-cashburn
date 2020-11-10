import {getValues, saveValues, storageKey} from "./Memory";

const valuesArrMock = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];

beforeEach(() => {
    localStorage.clear();
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    expect(getValues()).toEqual([]);
})

test('When saveValues is executed Then data should be saved in localstorage', () => {
    saveValues(valuesArrMock);
    expect(localStorage.__STORE__[storageKey]).toBe(JSON.stringify(valuesArrMock));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
})

test("Test that Value Can Be Saved And Retrieved", () => {
    saveValues(valuesArrMock);
    expect(getValues()).toEqual(valuesArrMock);
})
