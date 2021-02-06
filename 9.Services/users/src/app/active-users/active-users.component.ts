import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userToInactive = new EventEmitter<number>();

  users: string[];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }

  SetToInactive(id: number) {
    // this.userToInactive.emit(id);

    this.usersService.SetInactive(id);
    this.usersService.displayId.emit(id);
  }
}
