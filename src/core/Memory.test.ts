import MemoryService from "./Memory";

const CORRECT_VALUE_TO_SAVE = [{date: new Date(), value: 21}, {date: new Date(), value: 48}];

beforeEach(() => {
    localStorage.clear();
})

test("Test That Value Retrieved will Be Empty If not Set", () => {
    const memoryService = new MemoryService();
    expect(memoryService.getValues()).toEqual([]);
})

test('When saveValues is executed Then data should be saved in localstorage', () => {
    const memoryService = new MemoryService();

    memoryService.saveValues(CORRECT_VALUE_TO_SAVE);

    expect(localStorage.setItem).toHaveBeenCalledWith(memoryService.storageKey, JSON.stringify(CORRECT_VALUE_TO_SAVE));
    expect(localStorage.__STORE__[memoryService.storageKey]).toBe(JSON.stringify(CORRECT_VALUE_TO_SAVE));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
})

test("Test that Value Can Be Saved And Retrieved", () => {
    const memoryService = new MemoryService();

    memoryService.saveValues(CORRECT_VALUE_TO_SAVE);

    expect(memoryService.getValues()).toEqual(CORRECT_VALUE_TO_SAVE);
})
