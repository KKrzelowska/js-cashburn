import MemoryService from '../core/MemoryService';
import { makeAutoObservable } from 'mobx';

export interface Balance {
  date: Date;
  value: number;
}

class BalanceService {
  private balances: Balance[];

  constructor(private memoryService: MemoryService) {
    this.balances = this.memoryService.getValues();
    makeAutoObservable(this);
  }

  addBalance(valueFromBalanceForm: number): void {
    const valuesDatesFromMemory = this.memoryService.getValues();
    const valueWithDate = { date: new Date(), value: valueFromBalanceForm };
    this.balances = [valueWithDate, ...valuesDatesFromMemory];
    this.memoryService.saveValues(this.balances);
  }

  public getBalances(): Balance[] {
    return this.balances;
  }

  public static instance = new BalanceService(MemoryService.instance);
}

export default BalanceService;
