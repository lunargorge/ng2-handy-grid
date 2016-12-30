import { Component } from '@angular/core';

let aGridComponentTs = require('!!raw-loader?lang=typescript!./../sample/a-grid.component.ts');
let aGridComponentHtml = require('!!raw-loader?lang=markup!./../sample/a-grid.component.html');
let aRowUserComponentTs = require('!!raw-loader?lang=typescript!./../sample/row/a-row-user.component.ts');
let aRowUserComponentHtml = require('!!raw-loader?lang=markup!./../sample/row/a-row-user.component.html');

let userServiceTs = require('!!raw-loader?lang=typescript!./../../shared/services/user.service.ts');
let userModelTs = require('!!raw-loader?lang=typescript!./../../shared/data/user.model.ts');

@Component({
  selector: 'one-request-all-data-doc',
  templateUrl: './one-request-all-data-doc.component.html'
})

export class OneRequestAllDataDoc {
  aGridComponentTs: string = aGridComponentTs;
  aGridComponentHtml: string = aGridComponentHtml;
  aRowUserComponentTs: string = aRowUserComponentTs;
  aRowUserComponentHtml: string = aRowUserComponentHtml;
  userServiceTs: string = userServiceTs;
  userModelTs: string = userModelTs;
}
