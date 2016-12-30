import { HandyGridHeaderSort } from './handy-grid-header-sort.interface';

export interface HandyGridColumn {
  type: string, // type data
  field: string, // name field
  header: string, // display name field (name column)
  cssClass: string,
  sort?: HandyGridHeaderSort
}
