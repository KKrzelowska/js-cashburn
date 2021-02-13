class RoutingService {
  private history: { route: string }[];
  private route: string;

  constructor() {
    this.route = '';
    this.history = [];
  }
  public RouteChange() {
    return this.route;
  }
  public static instance = new RoutingService();
}
