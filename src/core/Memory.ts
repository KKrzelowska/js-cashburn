let values_in_browser = []

export function saveValues(values: { date: Date, value: number }[]): void {
    values_in_browser = values;

}


export function addArray(value1: any[], value2: any[]): any[] {
    let i = 0
    while (i < value2.length) {
        value1.push(value2[i])
        i++
    };
    return value1;
}
export function getValues(): { date: Date, value: number }[] {
    return values_in_browser;
}
