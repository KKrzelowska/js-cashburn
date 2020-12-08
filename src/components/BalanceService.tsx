import MemoryService from "../core/Memory";

class BalanceService {
    balances: { date: Date, value: number }[];
    memoryService: MemoryService;

    addBalance(valueFromBalanceForm: number) {
        let valuesDatesFromMemory = this.memoryService.getValues();
        let valueWithDate = {date: new Date(), value: valueFromBalanceForm};
        this.balances = [valueWithDate, ...valuesDatesFromMemory];
        this.memoryService.saveValues(this.balances);
    }

    constructor(memoryService: MemoryService) {
        this.memoryService = MemoryService.instance
        this.balances = [];
    };

    static instance = new BalanceService(MemoryService.instance);
};

export default BalanceService;