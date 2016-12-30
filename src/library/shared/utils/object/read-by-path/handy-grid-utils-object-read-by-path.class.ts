export class HandyGridUtilsObjectReadByPath {
  /**
   * @param string path 'ala.ma.kota'
   * @param object obj {ala: {ma: {kota: 'jakas wartosc'}}}
   * @returns {any}
   */
  process(path: string, obj: any): any {
    let p = path.split('.');
    let val: any;

    for (let v of p) {
      val = (!val) ? obj[v] : val[v];
    }

    return val;
  }
}
