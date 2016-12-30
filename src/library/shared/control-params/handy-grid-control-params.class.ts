
import { HandyGridPaginator } from '../paginator/handy-grid-paginator.class';

export interface HandyGridControlParamsInterface {
  current?: number;
  itemCountPerPage?: number;
  sortType?: number;
  sortField?: string;
}

/**
 * Klasa pozwala na zmianę parametrów odpowiadających za kontrolę listingu
 * (aktualana strona, ilość rekordów na stronie itp.)
 */
export class HandyGridControlParams {
  protected paginator: HandyGridPaginator;
  protected params: HandyGridControlParamsInterface = {
    current: 1,
    itemCountPerPage: 10,

    sortType: 0, // enum -> 0: ASC, 1: DESC
    sortField: ''
  };
  // filter: oddzielny interfejs

  setPaginatorService(paginatorService: HandyGridPaginator): void {
    this.paginator = paginatorService;
  }

  getParams(): HandyGridControlParamsInterface {
    if (this.paginator) {
      this.params.current = this.paginator.getCurrent();
      this.params.itemCountPerPage = this.paginator.getItemCountPerPage();
    }
    return this.params;
  }

  getParamsAsQuery(params?: HandyGridControlParamsInterface): string {
    if (params) {
      this.addParams(params);
    }
    let controlParams: HandyGridControlParamsInterface = this.getParams();

    let paramsUrl: string = '';
    let keys = Object.keys(controlParams);
    for (let key of keys) {
      if (controlParams[key] !== '') {
        paramsUrl += key + '=' + controlParams[key] + '&';
      }
    }

    return '?' + paramsUrl.substring(0, paramsUrl.length - 1);
  }

  addParams(params: HandyGridControlParamsInterface): void {
    let keys = Object.keys(params);

    for (let key of keys) {
      if (this.params.hasOwnProperty(key)) {
        this.params[key] = params[key];
      }
    }
  }
}
