import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
