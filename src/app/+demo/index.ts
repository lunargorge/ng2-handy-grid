import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Ng2HandyGridModule } from '../../library/index';

import { UserService } from './shared/services/user.service';
import { AGrid } from './one-request-all-data/sample/a-grid.component';
import { ARowUser } from './one-request-all-data/sample/row/a-row-user.component';
import { BGrid } from './request-per-page/sample/b-grid.component';
import { BRowUser } from './request-per-page/sample/row/b-row-user.component';
import { OneRequestAllDataDoc } from './one-request-all-data/docs/one-request-all-data-doc.component';
import { Ng2HandySyntaxHighlighterModule } from 'ng2-handy-syntax-highlighter';
import { RequestPerPageDoc } from './request-per-page/docs/request-per-page-doc.component';

export const routesListingExampleModule: Routes = [
  { path: 'one-request-all-data', component: AGrid },
  { path: 'request-per-page', component: BGrid }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesListingExampleModule),
    Ng2HandyGridModule,
    Ng2HandySyntaxHighlighterModule
  ],
  providers: [ UserService ],
  declarations:[
    AGrid, ARowUser, BGrid, BRowUser,
    OneRequestAllDataDoc, RequestPerPageDoc
  ]
})

export default class ListingExampleModule {

}
