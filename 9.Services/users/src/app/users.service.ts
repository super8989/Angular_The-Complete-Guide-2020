import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Jenny'];
  inactiveUsers = ['Sky', 'Kim'];

  displayId = new EventEmitter<number>();

  constructor(private counterService: CounterService) {}

  SetActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.counterService.incrementActive();
  }

  SetInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.counterService.incrementInactive();
  }
}
