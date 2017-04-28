import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http:Http) { }
fetchdata(){
return  this.http.get('https://anular2demo.firebaseio.com/.json').map(res=>res.json());
}
}
