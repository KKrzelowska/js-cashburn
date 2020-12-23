import MemoryService from "../core/Memory";
import { makeAutoObservable } from "mobx"

class BalanceService {
    balances: { date: Date, value: number }[];
    memoryService: MemoryService;
    
    constructor(memoryService: MemoryService) {
        this.memoryService = MemoryService.instance
        this.balances = this.memoryService.getValues();
        makeAutoObservable(this)
    };

    addBalance(valueFromBalanceForm: number) {
        let valuesDatesFromMemory = this.memoryService.getValues();
        let valueWithDate = {date: new Date(), value: valueFromBalanceForm};
        this.balances = [valueWithDate, ...valuesDatesFromMemory];
        this.memoryService.saveValues(this.balances);
    }


    static instance = new BalanceService(MemoryService.instance);
};


export default BalanceService;