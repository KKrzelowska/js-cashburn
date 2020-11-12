export const storageKey = 'values';

function parseValueDateToBeDateObj (valuesFromLS: { date: string, value: number }[]): { date: Date, value: number }[] {
    return valuesFromLS.map(dataObj => ({
        date: new Date(dataObj.date),
        value: dataObj.value
    }));
}

export function saveValues(values: { date: Date, value: number }[]): void {
    localStorage.setItem(storageKey, JSON.stringify(values))
}

export function getValues(): { date: Date, value: number }[] {
    return parseValueDateToBeDateObj(JSON.parse(localStorage.getItem(storageKey) ?? '[]'));
}
