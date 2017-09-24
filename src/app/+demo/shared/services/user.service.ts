
import { Observable } from 'rxjs';
import { User } from '../data/user.model';

// change to: import { ClassName } from 'ng2-handy-grid';
import {
  HandyGridControlParams,
  HandyGridControlParamsInterface
} from '../../../../library';

// skip: you do not need to use the following methods
import { HandyGridUtilsObjectReadByPath, HandyGridUtilsSortCompare } from '../../../../library';

const USERS: User[] = [
  {name: 'Alfie', surname: 'Prus', address: {city: {id: 1, value: 'Birmingham'}, street: {id: 1, value: 'High Street'}}, addDate: 1473552000000},
  {name: 'Archie', surname: 'Prus', address: {city: {id: 1, value: 'Birmingham'}, street: {id: 1, value: 'High Street'}}, addDate: 1473724800000},
  {name: 'Lewis', surname: 'Hill', address: {city: {id: 1, value: 'Birmingham'}, street: {id: 1, value: 'High Street'}}, addDate: 1473724800000},
  {name: 'Luca', surname: 'Fox', address: {city: {id: 1, value: 'Birmingham'}, street: {id: 1, value: 'High Street'}}, addDate: 1473724800000},
  {name: 'Filip', surname: 'Fox', address: {city: {id: 2, value: 'Bradford'}, street: {id: 2, value: 'Station Road'}}, addDate: 1473897600000},
  {name: 'Piers', surname: 'Prus', address: {city: {id: 2, value: 'Bradford'}, street: {id: 2, value: 'Station Road'}}, addDate: 1473897600000},
  {name: 'Rex', surname: 'Prus', address: {city: {id: 2, value: 'Bradford'}, street: {id: 2, value: 'Station Road'}}, addDate: 1473897600000},
  {name: 'Rupert', surname: 'Doson', address: {city: {id: 2, value: 'Bradford'}, street: {id: 3, value: 'Main Street'}}, addDate: 1473897600000},
  {name: 'Antoni', surname: 'Doson', address: {city: {id: 3, value: 'Canterbury'}, street: {id: 3, value: 'Main Street'}}, addDate: 1468368000000},
  {name: 'Trevor', surname: 'Doson', address: {city: {id: 3, value: 'Canterbury'}, street: {id: 3, value: 'Main Street'}}, addDate: 1468368000000},
  {name: 'Trevor', surname: 'Young', address: {city: {id: 3, value: 'Canterbury'}, street: {id: 3, value: 'Main Street'}}, addDate: 1468368000000},
  {name: 'Gregor', surname: 'Young', address: {city: {id: 3, value: 'Canterbury'}, street: {id: 4, value: 'Park Road'}}, addDate: 1468368000000},
  {name: 'Lachlan', surname: 'Gmyz', address: {city: {id: 4, value: 'Derby'}, street: {id: 4, value: 'Park Road'}}, addDate: 1468368000000},
  {name: 'Igor', surname: 'Gmyz', address: {city: {id: 4, value: 'Derby'}, street: {id: 4, value: 'Park Road'}}, addDate: 1468368000000},
  {name: 'Fergus', surname: 'Young', address: {city: {id: 4, value: 'Derby'}, street: {id: 4, value: 'Park Road'}}, addDate: 1468368000000},
  {name: 'Duncan', surname: 'Young', address: {city: {id: 4, value: 'Derby'}, street: {id: 5, value: 'Church Road'}}, addDate: 1468368000000},
  {name: 'Duncan', surname: 'Gmyz', address: {city: {id: 5, value: 'Exeter'}, street: {id: 5, value: 'Church Road'}}, addDate: 1468368000000},
  {name: 'Angus', surname: 'Gmyz', address: {city: {id: 5, value: 'Exeter'}, street: {id: 5, value: 'Church Road'}}, addDate: 1468368000000},
  {name: 'Blthazar', surname: 'Lee', address: {city: {id: 5, value: 'Exeter'}, street: {id: 5, value: 'Church Road'}}, addDate: 1468368000000},
  {name: 'Conall', surname: 'Lee', address: {city: {id: 5, value: 'Exeter'}, street: {id: 6, value: 'London Road'}}, addDate: 1468368000000},
  {name: 'Arran', surname: 'Lee', address: {city: {id: 5, value: 'Exeter'}, street: {id: 6, value: 'London Road'}}, addDate: 1473552000000},
  {name: 'Abiela', surname: 'Hunter', address: {city: {id: 6, value: 'Lancaster'}, street: {id: 7, value: 'Victoria Road'}}, addDate: 1473552000000},
  {name: 'Dacia', surname: 'Hunter', address: {city: {id: 6, value: 'Lancaster'}, street: {id: 7, value: 'Victoria Road'}}, addDate: 1473724800000},
  {name: 'Dakota', surname: 'Miller', address: {city: {id: 6, value: 'Lancaster'}, street: {id: 8, value: 'Church Lane'}}, addDate: 1473724800000},
  {name: 'Fabia', surname: 'Miller', address: {city: {id: 6, value: 'Lancaster'}, street: {id: 8, value: 'Church Lane'}}, addDate: 1473724800000},
  {name: 'Fabiola', surname: 'Kelly', address: {city: {id: 7, value: 'Lancaster'}, street: {id: 8, value: 'Church Lane'}}, addDate: 1473897600000},
  {name: 'Gregory', surname: 'Kelly', address: {city: {id: 7, value: 'Lancaster'}, street: {id: 9, value: 'School Lane'}}, addDate: 1473897600000},
  {name: 'Saar', surname: 'Kelly', address: {city: {id: 8, value: 'Oxford'}, street: {id: 10, value: 'New Road'}}, addDate: 1473897600000},
  {name: 'Sade', surname: 'Kelly', address: {city: {id: 8, value: 'Oxford'}, street: {id: 10, value: 'New Road'}}, addDate: 1473897600000},
  {name: 'Sai', surname: 'Adams', address: {city: {id: 8, value: 'Oxford'}, street: {id: 10, value: 'New Road'}}, addDate: 1468368000000},
  {name: 'Sadako', surname: 'Adams', address: {city: {id: 9, value: 'Preston'}, street: {id: 11, value: 'Highfield Road'}}, addDate: 1468368000000},
  {name: 'Sabera', surname: 'Simpson', address: {city: {id: 9, value: 'Preston'}, street: {id: 11, value: 'Highfield Road'}}, addDate: 1468368000000},
  {name: 'Waneta', surname: 'Simpson', address: {city: {id: 9, value: 'Preston'}, street: {id: 11, value: 'Highfield Road'}}, addDate: 1468368000000},
  {name: 'Whitney', surname: 'Webb', address: {city: {id: 9, value: 'Preston'}, street: {id: 11, value: 'Highfield Road'}}, addDate: 1468368000000},
  {name: 'Wilma', surname: 'Hill', address: {city: {id: 10, value: 'Salford'}, street: {id: 12, value: 'The Green'}}, addDate: 1468368000000},
  {name: 'Oba', surname: 'Hill', address: {city: {id: 10, value: 'Salford'}, street: {id: 12, value: 'The Green'}}, addDate: 1468368000000},
  {name: 'Ofra', surname: 'Gibson', address: {city: {id: 10, value: 'Salford'}, street: {id: 12, value: 'The Green'}}, addDate: 1468368000000},
  {name: 'Ohara', surname: 'Gibson', address: {city: {id: 10, value: 'Salford'}, street: {id: 13, value: 'Queen Street'}}, addDate: 1468368000000},
  {name: 'Ohanna', surname: 'Fox', address: {city: {id: 11, value: 'Winchester'}, street: {id: 13, value: 'Queen Street'}}, addDate: 1468368000000},
  {name: 'Odette', surname: 'Fox', address: {city: {id: 11, value: 'Winchester'}, street: {id: 13, value: 'Queen Street'}}, addDate: 1468368000000},
  {name: 'Oksana', surname: 'Harper', address: {city: {id: 11, value: 'Winchester'}, street: {id: 14, value: 'Grove Road'}}, addDate: 1468368000000},
  {name: 'Danuta', surname: 'Harper', address: {city: {id: 11, value: 'Winchester'}, street: {id: 14, value: 'Grove Road'}}, addDate: 1473552000000}
];

export class UserService {
  getAll() {
    console.log(USERS.length);
    return Observable.of(USERS);
  }

  // ATTENTION: In this example I simulate the behavior backend
  getPart(paramsService ?: HandyGridControlParams): Observable<{items: User[], itemCount: number}> {

    let items: User[] = [];
    let params: HandyGridControlParamsInterface = paramsService.getParams();
    console.log(params, USERS.length);

    // => START backend logic

    // sort
    if (params.sortField !== '') {
      let objectReadByPath: HandyGridUtilsObjectReadByPath = new HandyGridUtilsObjectReadByPath();
      let sortCompare: HandyGridUtilsSortCompare = new HandyGridUtilsSortCompare();
      USERS.sort((previous: any, current: any) => {
        let prev: any = objectReadByPath.process(params.sortField, previous);
        let curr: any = objectReadByPath.process(params.sortField, current);
        return sortCompare.process(params.sortType, prev, curr);
      });
    }

    // get part data by page number
    let end: number = (params.current * params.itemCountPerPage);
    let start: number = end - params.itemCountPerPage;

    let itemsLength = USERS.length;
    for (let i = 0; i < itemsLength; i++) {
      if (i >= start && i < end) {
        items.push(USERS[i]);
      }
    }

    // => END backend logic

    return Observable.of({items: items, itemCount: USERS.length});
  }
}
