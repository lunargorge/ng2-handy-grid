import { HandyGridRow } from '../../model/row/handy-grid-row.model';
import { HandyGridColumn } from '../../interfaces/handy-grid-column.interface';
import { HandyGridUtilsObjectReadByPath } from '../utils/object/read-by-path/handy-grid-utils-object-read-by-path.class';
import { HandyGridUtilsSortCompare } from '../utils/sort/compare/handy-grid-utils-sort-compare.class';

export class HandyGridSort {

  constructor(private sortCompare: HandyGridUtilsSortCompare, private objectReadByPath: HandyGridUtilsObjectReadByPath) {

  }

  process(column: HandyGridColumn, items: HandyGridRow<any>[]): void {
    items.sort((previous: any, current: any) => {
      let prev: any = this.objectReadByPath.process(column.field, previous.data);
      let curr: any = this.objectReadByPath.process(column.field, current.data);

      if (column.type === 'date') {
        // firefox ma klopoty z obiektem Date, wiec porownujemy jako string
        // prev = new Date(prev);
        // curr = new Date(curr);
      }

      if (column.sort.hasOwnProperty('method')) {
        return column.sort.method(column.sort.type, prev, curr);
      } else {
        return this.sortCompare.process(column.sort.type, prev, curr);
      }
    });

    this.changeSortType(column);
  }

  changeSortType(column: HandyGridColumn) {
    column.sort.type = (column.sort.type === 0 || column.sort.type === 1) ? 2 : 1;
  }
}
