import { HandyGridRow } from '../../model/row/handy-grid-row.model';
import { HandyGridColumn } from '../../interfaces/handy-grid-column.interface';
import { HandyGridUtilsInterface, HandyGridUtilsFactory } from '../../shared/handy-grid-utils.factory';
import { HandyGridMode } from '../../enum/handy-grid-mode.enum';

/**
 * Base class to grid component
 */
export abstract class HandyGridBase {
  protected handyGridMode: number = HandyGridMode.ALL_DATA;
  protected rows: HandyGridRow<any>[];
  protected columns: HandyGridColumn[];
  protected utils: HandyGridUtilsInterface;

  constructor() {
    let hgUtilsFactory: HandyGridUtilsFactory = new HandyGridUtilsFactory();
    this.utils = hgUtilsFactory.create();
  }

  // @override: get grid data from backend
  hgGetData(): void {
    // ....
  }

  changeItemCountPerPage(itemCountPerPage: number): void {
    itemCountPerPage = itemCountPerPage || 5;
    this.utils.paginator.addParams({itemCountPerPage: itemCountPerPage});
    this.process();
  }

  sort(column: HandyGridColumn): void {
    if (!column.hasOwnProperty('sort')) {
      return;
    }

    this.columns.forEach((col: HandyGridColumn) => {
      if (column.field !== col.field) {
        col.sort.type = 0;
      }
    });

    if (this.handyGridMode === HandyGridMode.ALL_DATA) {
      this.utils.sort.process(column, this.rows);
    } else {
      this.utils.params.addParams({
        sortField: column.field,
        sortType: column.sort.type
      });
      this.process();
      this.utils.sort.changeSortType(column);
    }
  }

  pagination(current: number): void {
    this.utils.paginator.addParams({current: current});
    this.process();
  }

  paginationGetFirst(): void {
    this.pagination(this.utils.paginator.getFirst());
  }

  paginationGetPrevious(): void {
    this.pagination(this.utils.paginator.getPrevious());
  }

  paginationGetNext(): void {
    this.pagination(this.utils.paginator.getNext());
  }

  paginationGetLast(): void {
    this.pagination(this.utils.paginator.getLast());
  }

  protected display(): void {
    this.utils.paginator.process();

    if (this.handyGridMode === HandyGridMode.ALL_DATA) {
      this.utils.displayRows.setRows(this.rows);
      this.utils.displayRows.display();
    }

    // loader flag false .... !!!!
    // Attention: strategy HandyGridMode.REQUEST_PER_PAGE can't use this.getGridData(), because the process may become tangled
  }

  protected process(): void {
    this.display();

    if (this.handyGridMode === HandyGridMode.REQUEST_PER_PAGE) {
      // loader flag true .... !!!!
      this.rows = [];
      this.hgGetData();
    }
  }
}
