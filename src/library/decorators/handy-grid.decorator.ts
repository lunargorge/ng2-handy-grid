import { HandyGridColumn } from '../interfaces/handy-grid-column.interface';
import { HandyGridConfig } from '../interfaces/handy-grid-config.interface';

/**
 * Decorator to grid component
 * - AnyGridComponent.columns = config.columns
 *
 * @param config: HandyGridConfig
 * @returns {(target:any)=>any}
 * @constructor
 */
export function HandyGrid(config: HandyGridConfig) {
  let propertyColumnName: string = 'columns';

  return function (target: any) { // @param target - declared class
    if (target.prototype[propertyColumnName]) {
      delete target.prototype[propertyColumnName];
    }
    let columns: HandyGridColumn[] = config.columns;
    target.prototype[propertyColumnName] = columns;
    return target;
  };
}
