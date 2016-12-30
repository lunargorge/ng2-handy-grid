import { Component } from '@angular/core';

let example: string = `
import { NgModule } from 'angular2/core';
import { Ng2HandyGridModule } from 'ng2-handy-grid';

@NgModule({
 bootstrap:    [ /*YourAppComponent*/ ],
 declarations: [ /*YourAppComponent*/ ],
 imports:      [ BrowserModule, Ng2HandyGridModule ]
})
export class YourAppModule {}
`;

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  example: string = example;

  constructor() {

  }
}
