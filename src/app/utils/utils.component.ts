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

//  sort: sortService,
//  params: paramsService,
//  paginator: paginatorService,

@Component({
  selector: 'utils',
  templateUrl: './utils.component.html'
})
export class UtilsComponent {
  example: string = example;

  constructor() {

  }
}
