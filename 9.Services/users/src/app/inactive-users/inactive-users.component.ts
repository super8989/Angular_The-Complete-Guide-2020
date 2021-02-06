import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userToActive = new EventEmitter<number>();

  users: string[];

  constructor(private usersService: UsersService) {
    this.usersService.displayId.subscribe((id: number) => {
      alert(`id: ${id}`);
    });
  }

  ngOnInit() {
    this.users = this.usersService.inactiveUsers;
  }

  SetToActive(id: number) {
    // this.userToActive.emit(id);
    this.usersService.SetActive(id);
  }
}
