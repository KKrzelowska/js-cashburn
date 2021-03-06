class MemoryService {
  storageKey = 'values';

  recoverTypesFromParsedJSON(
    valuesFromLocalStorage: { date: string; value: number }[]
  ): { date: Date; value: number }[] {
    return valuesFromLocalStorage.map(dataObj => ({
      date: new Date(dataObj.date),
      value: dataObj.value
    }));
  }

  saveValues(values: { date: Date; value: number }[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(values));
  }

  getValues(): { date: Date; value: number }[] {
    return this.recoverTypesFromParsedJSON(
      JSON.parse(localStorage.getItem(this.storageKey) ?? '[]')
    );
  }

  static instance = new MemoryService();
}

export default MemoryService;
