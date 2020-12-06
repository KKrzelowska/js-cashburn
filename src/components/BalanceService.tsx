import {getValues, saveValues, storageKey} from "../core/Memory";

class BalanceService {
    saveValues: (balances: { date: Date, value: number }[]) => void;
    balances: { date: Date, value: number }[] ;

    addBalance(valueFromBalanceForm: number) {
        let valuesDatesFromMemory = getValues();
        let valueWithDate = {date: new Date(), value: valueFromBalanceForm};
        let valueToSave = [valueWithDate, ...valuesDatesFromMemory];
        this.balances = [valueWithDate, ...valuesDatesFromMemory];
        saveValues(valueToSave);
    }

    constructor() {
        this.saveValues = (balances) => saveValues(balances);
        this.balances = [];
    };

    static instance = new BalanceService();
};

export default BalanceService;