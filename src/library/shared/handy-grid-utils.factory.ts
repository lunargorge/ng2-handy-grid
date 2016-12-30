import { Injectable } from '@angular/core';

import { HandyGridSort } from './sort/handy-grid-sort.service';
import { HandyGridPaginator } from './paginator/handy-grid-paginator.class';
import { HandyGridDisplayRows } from './display-row/handy-grid-display-rows.class';
import { HandyGridControlParams } from './control-params/handy-grid-control-params.class';
import { HandyGridSortFactory } from './sort/handy-grid-sort-factory.service';

export interface HandyGridUtilsInterface {
  sort: HandyGridSort;
  params: HandyGridControlParams;
  displayRows: HandyGridDisplayRows;
  paginator: HandyGridPaginator;
}

@Injectable()

export class HandyGridUtilsFactory {

  constructor() {

  }

  create(): HandyGridUtilsInterface {

    let sortFactory: HandyGridSortFactory = new HandyGridSortFactory();
    let sortService: HandyGridSort = sortFactory.create();
    let paginatorService: HandyGridPaginator = new HandyGridPaginator();
    let paramsService: HandyGridControlParams = new HandyGridControlParams();
    let displayRowsService: HandyGridDisplayRows = new HandyGridDisplayRows();

    displayRowsService.setListingParamsService(paramsService);
    paramsService.setPaginatorService(paginatorService);

    return {
      sort: sortService,
      params: paramsService,
      paginator: paginatorService,
      displayRows: displayRowsService // move to HandyGridBase ...
    };
  }
}
