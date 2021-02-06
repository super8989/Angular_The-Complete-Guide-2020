import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element name
  // selector: '[app-servers]',  // div attribute
  // selector: '.app-servers',      // classname
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'server-name';
  username = 'user';
  serverCreated = false;
  servers = ['server1', 'server2', 'server3'];

  displayDetail = false;
  buttons = [];
  number = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = !this.serverCreated;
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onClickReset() {
    this.username = '';
  }

  onDisplayDetail() {
    this.displayDetail = !this.displayDetail;
    this.buttons.push(new Date());
    // this.number++;
  }

  blueBackground() {
   return this.number > 2 ? 'lightblue' : 'none';
  }
}
