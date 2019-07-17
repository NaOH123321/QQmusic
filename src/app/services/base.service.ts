import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Message, QueryParameter } from './../domain';
import { Store, select } from '@ngrx/store';
// import * as fromRoot from '../reducers';
import { take, map, filter, tap } from 'rxjs/operators';
import { debug } from '../utils/debug.util';

export class BaseService {
  protected headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

//   baseStore$: Store<fromRoot.State>;

  constructor(
    http: HttpClient,
    // store$: Store<fromRoot.State>,
  ) {
    // this.baseStore$ = store$;
  }

  setPaginationParameter(parameter: QueryParameter) {
    let params = new HttpParams();
    if (parameter.pageIndex != null) {
      params = params.append('pageIndex', `${parameter.pageIndex}`);
    }
    if (parameter.pageSize != null) {
      params = params.append('pageSize', `${parameter.pageSize}`);
    }
    if (parameter.orderBy != null) {
      params = params.append('orderBy', `${parameter.orderBy}`);
    }
    if (parameter.fields != null) {
      params = params.append('fields', `${parameter.fields}`);
    }
    return params;
  }
}
