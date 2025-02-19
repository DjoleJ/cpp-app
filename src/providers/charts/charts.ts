import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ChartsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChartsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ChartsProvider Provider');
  }

  getCharts() {
    this.http.get('db.json').subscribe(data => {
      console.log(data);
    });
  }

}
