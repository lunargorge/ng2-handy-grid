
import { Component, Input } from '@angular/core';

// change to: import { ClassName } from 'ng2-handy-grid';
import { HandyGridColumn, HandyGridRow } from '../../../../../library';

import { User } from '../../../shared/data/user.model';

@Component({
  selector: 'a-row-user',
  templateUrl: './a-row-user.component.html'
})

export class ARowUser {
  @Input() columns: HandyGridColumn[];
  @Input() row: HandyGridRow<User>;
}
