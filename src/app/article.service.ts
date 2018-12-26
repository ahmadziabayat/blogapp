import { Injectable } from '@angular/core';


import {Http, Headers, RequestOptions} from '@angular/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import 'rxjs/Rx';

@Injectable()

export class ArticleService {

  result:any;

  constructor(private _http: Http) { }

  getArticles() {
    return this._http.get("/api/all").map(result => this.result = result.json());
  }
}
