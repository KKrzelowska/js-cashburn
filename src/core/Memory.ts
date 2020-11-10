export const storageKey = 'values';

export function saveValues(values: { date: Date, value: number }[]): void {
    localStorage.setItem(storageKey, JSON.stringify(values))
}

//TODO: add Date object deserialization from string
export function getValues(): { date: Date, value: number }[] {
    return JSON.parse(localStorage.getItem(storageKey) ?? '[]')
}
