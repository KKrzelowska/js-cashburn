import MemoryService from "../core/Memory";

class BalanceService {
    saveValues: (balances: { date: Date, value: number }[]) => void;
    balances: { date: Date, value: number }[] ;

    addBalance(valueFromBalanceForm: number) {
        let valuesDatesFromMemory = MemoryService.instance.getValues();
        let valueWithDate = {date: new Date(), value: valueFromBalanceForm};
        let valueToSave = [valueWithDate, ...valuesDatesFromMemory];
        this.balances = [valueWithDate, ...valuesDatesFromMemory];
        MemoryService.instance.saveValues(valueToSave);
    }

    constructor() {
        this.saveValues = (balances) => MemoryService.instance.saveValues(balances);
        this.balances = [];
    };

    static instance = new BalanceService();
};

export default BalanceService;