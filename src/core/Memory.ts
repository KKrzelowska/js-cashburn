export function saveValues(values: { date: Date, value: number }[]): void {
    localStorage.setItem('values', JSON.stringify(values))
}

export function getValues(): { date: Date, value: number }[] {
    return JSON.parse(localStorage.getItem('values') || '[]')
}
