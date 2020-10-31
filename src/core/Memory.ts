let values_in_browser: { date: Date, value: number }[] = [];

export function saveValues(values: { date: Date, value: number }[]): void {
    values_in_browser = values;
}

export function getValues(): { date: Date, value: number }[] {
    return values_in_browser;
}
