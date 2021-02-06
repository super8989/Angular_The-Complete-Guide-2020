export class CounterService {
  active = 0;
  inactive = 0;

  incrementActive() {
    this.active++;
    console.log('active:', this.active);
  }

  incrementInactive() {
    this.inactive++;
    console.log('inactive:', this.inactive);
  }
}
