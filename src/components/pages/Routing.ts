import { History, createBrowserHistory } from 'history';

class RoutingService {
  constructor(protected history: History) {}
  public goToInputForm(): void {
    this.history.push('/home');
  }
  public goToGraph(): void {
    this.history.push('/graph');
  }
  public getHistory(): History {
    return this.history;
  }
  public static instance = new RoutingService(createBrowserHistory());
}

export default RoutingService;
