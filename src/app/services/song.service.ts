import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import {
  QueryParameter,
  DataWithPagination,
  Pagination,
  Song,
  Message,
  SongParameter
} from '../domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService extends BaseService {
  private readonly domain = 'songs';
  constructor(private http: HttpClient) {
    super(http);
  }

  getAll(parameter: QueryParameter): Observable<DataWithPagination> {
    const params = this.setPaginationParameter(parameter);
    const url = `${environment.baseUrl}/${this.domain}`;

    return this.http
      .get<Message>(url, {
        headers: this.headers,
        params,
        observe: 'response'
      })
      .pipe(
        map(response => {
          return {
            array: response.body.data as Song[],
            pagination: JSON.parse(
              response.headers.get('X-Pagination')
            ) as Pagination
          };
        })
      );
  }

  getAllBySearch(parameter: SongParameter): Observable<DataWithPagination> {
    let params = this.setPaginationParameter(parameter);
    if (parameter.keywords != null) {
      params = params.append('keywords', parameter.keywords);
    }
    const url = `${environment.baseUrl}/${this.domain}/search`;

    return this.http
      .get<Message>(url, {
        headers: this.headers,
        params,
        observe: 'response'
      })
      .pipe(
        map(response => {
          return {
            array: response.body.data as Song[],
            pagination: JSON.parse(
              response.headers.get('X-Pagination')
            ) as Pagination
          };
        })
      );
  }
}
