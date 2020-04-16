import { Component } from '@angular/core';

interface User {
  name: string,
  age: number,
  isSingle: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';
  rockbandName: string;
  rockbands: string[];
  users: User[];

  constructor() {
    this.rockbands = ['kiss', 'AC/DC', 'Aerosmith'];
    this.users = [ {
      name: 'Lisandro',
      age: '20',
      isSingle: true
    }];
  }

  addRockBand() {
    this.rockbands.push(this.rockbandName);
    this.rockbandName = '';
  }

  clearRockBands() {
    this.rockbands = [];
  }

  deleteItem(index: number) {
    this.rockbands.splice(index, 1);
  }

  updateItem(index: number) {
    this.rockbands[index] = this.rockbandName;
  }
}
