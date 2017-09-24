
import { Component, OnInit } from '@angular/core';

// change to: import { ClassName } from 'ng2-handy-grid';
import {
  HandyGrid, HandyGridBase, HandyGridRow, HandyGridMode
} from '../../../../library';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/data/user.model';

@Component({
  selector: 'b-grid',
  templateUrl: './b-grid.component.html',
})

@HandyGrid({
  columns: [
    {type: 'text', field: 'name', header: 'Name', cssClass: 'col-xs-4', sort: {type: 0}},
    {type: 'text', field: 'address.city.value', header: 'City', cssClass: 'col-xs-4', sort: {type: 0}},
    {type: 'date', field: 'addDate', header: 'Date', cssClass: 'col-xs-4', sort: {type: 0}}
  ]
})

export class BGrid extends HandyGridBase implements OnInit {
  protected handyGridMode: number = HandyGridMode.REQUEST_PER_PAGE;
  rows: HandyGridRow<User>[] = [];

  constructor(private userService: UserService) {
    super();
  }

  ngOnInit() {
    // only if you want to change the default values
    this.utils.paginator.addParams({
      pageCountDisplay: 4,
      itemCountPerPage: 5
    });

    this.hgGetData();
  }

  hgGetData(): void {
    this.userService.getPart(this.utils.params).subscribe((res) => {
      res.items.forEach((item) => {
        let row: HandyGridRow<User> = new HandyGridRow<User>();
        row.data = item;
        this.rows.push(row);
      });

      this.utils.paginator.addParams({itemCount: res.itemCount});
      this.display();
    });
  }
}
