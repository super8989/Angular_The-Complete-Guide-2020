import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userToInactive = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  SetToInactive(id: number) {
    this.userToInactive.emit(id);
  }
}
