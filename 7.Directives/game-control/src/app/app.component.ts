import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'game-control';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onIntervalFired(firedNumber: number) {
    firedNumber % 2 === 0
      ? this.evenNumbers.push(firedNumber)
      : this.oddNumbers.push(firedNumber);
  }
}
