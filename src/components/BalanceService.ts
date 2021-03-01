import MemoryService from '../core/MemoryService';
import { makeAutoObservable } from 'mobx';

class BalanceService {
  private balances: { date: Date; value: number }[];
  private memoryService: MemoryService;

  constructor(memoryService: MemoryService) {
    this.memoryService = MemoryService.instance;
    this.balances = this.memoryService.getValues();
    makeAutoObservable(this);
  }

  addBalance(valueFromBalanceForm: number) {
    const valuesDatesFromMemory = this.memoryService.getValues();
    const valueWithDate = { date: new Date(), value: valueFromBalanceForm };
    this.balances = [valueWithDate, ...valuesDatesFromMemory];
    this.memoryService.saveValues(this.balances);
  }

  public getBalances() {
    return this.balances;
  }

  public static instance = new BalanceService(MemoryService.instance);
}

export default BalanceService;
