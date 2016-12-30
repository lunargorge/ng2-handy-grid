import { HandyGridRow } from '../../model/row/handy-grid-row.model';
import {
  HandyGridControlParams,
  HandyGridControlParamsInterface
} from '../control-params/handy-grid-control-params.class';

/**
 * Klasa odpowiada za ustawienie klucza "display" w elemencie będącym instancją HandyGridRow
 */
export class HandyGridDisplayRows {
  rows: HandyGridRow<any>[];
  params: HandyGridControlParams;

  setRows(rows: HandyGridRow<any>[]): void {
    this.rows = rows;
  }

  setListingParamsService(listingParams: HandyGridControlParams): void {
    this.params = listingParams;
  }

  display(): void {
    let params: HandyGridControlParamsInterface = this.params.getParams();
    let end: number = (params.current * params.itemCountPerPage);
    let start: number = end - params.itemCountPerPage;

    let rowsLength = this.rows.length;
    for (let i = 0; i < rowsLength; i++) {
      this.rows[i].display = (i >= start && i < end) ? true : false;
    }
  }
}
