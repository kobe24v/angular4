/**
 * Created by zhang on 17-7-4.
 */
import { Injectable } from '@angular/core';
import {Http, RequestOptions, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class AddressService {
  private baseUrl = 'http://localhost:8888/mdt/v1';
  constructor(private http: Http) { }

  public get(url: any, options: any): Observable<any> {
    const urls = `${this.baseUrl}/${url}`;
    return this.http
      .get(urls, options)
      .map(response => {
      return response.json()})
      .catch(this.handleError)
  }
  public handleError(error: Response | any) {

    return Observable.throw(error.message || error);
  }
}
