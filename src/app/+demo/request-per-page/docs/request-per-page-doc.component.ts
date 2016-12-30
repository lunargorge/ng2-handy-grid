import { Component } from '@angular/core';

let bGridComponentTs = require('!!raw-loader?lang=typescript!./../sample/b-grid.component.ts');
let bGridComponentHtml = require('!!raw-loader?lang=markup!./../sample/b-grid.component.html');
let bRowUserComponentTs = require('!!raw-loader?lang=typescript!./../sample/row/b-row-user.component.ts');
let bRowUserComponentHtml = require('!!raw-loader?lang=markup!./../sample/row/b-row-user.component.html');

let userServiceTs = require('!!raw-loader?lang=typescript!./../../shared/services/user.service.ts');
let userModelTs = require('!!raw-loader?lang=typescript!./../../shared/data/user.model.ts');

@Component({
  selector: 'request-per-page-doc',
  templateUrl: './request-per-page-doc.component.html'
})

export class RequestPerPageDoc {
  bGridComponentTs: string = bGridComponentTs;
  bGridComponentHtml: string = bGridComponentHtml;
  bRowUserComponentTs: string = bRowUserComponentTs;
  bRowUserComponentHtml: string = bRowUserComponentHtml;
  userServiceTs: string = userServiceTs;
  userModelTs: string = userModelTs;
}
