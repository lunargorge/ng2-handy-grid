import { Injectable } from '@angular/core';
import { HandyGridSort } from './handy-grid-sort.service';
import { HandyGridUtilsObjectReadByPath } from '../utils/object/read-by-path/handy-grid-utils-object-read-by-path.class';
import { HandyGridUtilsSortCompare } from '../utils/sort/compare/handy-grid-utils-sort-compare.class';

@Injectable()

export class HandyGridSortFactory {

  constructor() {

  }

  create(): HandyGridSort {
    return new HandyGridSort(new HandyGridUtilsSortCompare(), new HandyGridUtilsObjectReadByPath());
  }

}
