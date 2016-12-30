export class HandyGridUtilsSortCompare {
  process(sortType: number, previous: any, current: any): number {
    if (previous < current) {
      return (sortType === 0 || sortType === 1) ? -1 : 1;
    }

    if (previous > current) {
      return (sortType === 2) ? -1 : 1;
    }

    return 0;
  }
}
