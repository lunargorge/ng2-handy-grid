
import { Component, OnInit } from '@angular/core';

// change to: import { ClassName } from 'ng2-handy-grid';
import { HandyGrid, HandyGridBase, HandyGridRow } from '../../../../library';

import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/data/user.model';

@Component({
  selector: 'a-grid',
  templateUrl: './a-grid.component.html',
})

@HandyGrid({
  columns: [
    {type: 'text', field: 'name', header: 'Name', cssClass: 'col-xs-4', sort: {type: 0}},
    {type: 'text', field: 'address.city.value', header: 'City', cssClass: 'col-xs-4', sort: {type: 0}},
    {type: 'date', field: 'addDate', header: 'Date', cssClass: 'col-xs-4', sort: {type: 0}}
  ]
})

export class AGrid extends HandyGridBase implements OnInit {
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
    this.userService.getAll().subscribe((users) => {
      users.forEach((u) => {
        let row: HandyGridRow<User> = new HandyGridRow<User>();
        row.data = u;
        this.rows.push(row);
      });

      this.utils.paginator.addParams({itemCount: this.rows.length});
      this.display();
    });
  }
}

