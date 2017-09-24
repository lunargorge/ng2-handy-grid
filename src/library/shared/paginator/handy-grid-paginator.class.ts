export interface HandyGridPaginatorInterface {
  first?: number;
  previous?: number;           // Previous page number
  current?: number;            // Current page number
  next?: number;               // Next page number
  last?: number;               // Last page number
  pageCountAll?: number;       // Number of pages
  pageCountDisplay?: number;   // Number of pages max/display (buttons)
  itemCountPerPage?: number;   // Number of items per page
  itemCount?: number;          // Number of rows
}

export class HandyGridPaginator {
  protected params: HandyGridPaginatorInterface = {
    first: 1,
    previous: 0,
    current: 1,
    next: 0,
    last: 0,
    pageCountAll: 10,
    pageCountDisplay: 5,
    itemCountPerPage: 10,
    itemCount: 0,
  };

  addParams(params: HandyGridPaginatorInterface): void {
    let keys = Object.keys(params);

    for (let key of keys) {
      if (this.params.hasOwnProperty(key)) {
        this.params[key] = params[key];
      }
    }

    // this.process();
  }

  getItemCountPerPage(): number {
    return this.params.itemCountPerPage;
  }

  getFirst(): number {
    return this.params.first;
  }

  getPrevious(): number {
    return this.params.previous;
  }

  getCurrent(): number {
    return this.params.current;
  }

  getNext(): number {
    return this.params.next;
  }

  getLast(): number {
    return this.params.last;
  }

  /**
   * Method return pages number
   * @returns {number[]}
   */
  getPageNumbers(): number[] {
    let num: number[] = [];
    let startNumber = this.params.current - 1;

    if (startNumber < 1) {
      startNumber = 1;
    }
    else if (this.params.pageCountDisplay + startNumber > this.params.pageCountAll) {
      startNumber = (this.params.pageCountAll - this.params.pageCountDisplay) + 1;
    }

    for (let i = 1; i <= this.params.pageCountDisplay; i++) {
        num.push(startNumber);
        startNumber++;
    }

    return num;
  }

  process(): void {
    this.params.pageCountAll = Math.ceil(this.params.itemCount / this.params.itemCountPerPage);
    this.params.pageCountDisplay = (this.params.pageCountDisplay < this.params.pageCountAll) ? this.params.pageCountDisplay : this.params.pageCountAll;

    this.params.last = this.params.pageCountAll;
    this.params.next = (this.params.pageCountAll === this.params.current) ? this.params.pageCountAll : this.params.current + 1;
    this.params.previous = (this.params.current === 1) ? 1 : this.params.current - 1;
  }
}
