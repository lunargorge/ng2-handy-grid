
import { Component, Input } from '@angular/core';

// change to: import { ClassName } from 'ng2-handy-grid';
import { HandyGridColumn, HandyGridRow } from '../../../../../library';

import { User } from '../../../shared/data/user.model';


@Component({
  selector: 'b-row-user',
  templateUrl: './b-row-user.component.html'
})

export class BRowUser {
  @Input() columns: HandyGridColumn[];
  @Input() row: HandyGridRow<User>;
}
