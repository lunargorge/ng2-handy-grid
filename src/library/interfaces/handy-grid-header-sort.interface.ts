export interface HandyGridHeaderSort {
  type: number; // 0 - no sort, 1 - asc, 2 - desc
  method?: Function; // function(sortType: number, previous: any, current: any)
}
