import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../../admin/users/users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseUrl: string = 'http://localhost:8080/api';
  private headers = new Headers({ "Content-Type": "applicatetion/json"})
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http:Http) { }

  getAllUser(){
    return this.http.get(this.baseUrl,this.options).pipe(
      map(res => {
        return res.json();
      }),
      catchError(this.handleError));
  }

    // deleteUser(id: Number) {
  //   return this._http.delete(this.baseUrl + '/admin/' + id, this.options)
  //     .pipe(map(res => { return res.json(); }),
  //       catchError(this.handleError));
  // }

  // getUserById(id: Number) {
  //   return this._http
  //     .get(this.baseUrl + '/admin/' + id, this.options).pipe(
  //       map(res => {
  //         return res.json();
  //       }),
  //       catchError(this.handleError));
  // }

  // createUser(admin:Admin) {
  //   return this._http
  //     .post(this.baseUrl + '/admin', JSON.stringify(admin), this.options).pipe(
  //       map(res => {
  //         return res.json();
  //       }),
  //       catchError(this.handleError));
  // }

  // updateUser(admin:Admin) {
  //   return this._http
  //     .put(this.baseUrl + '/admin', JSON.stringify(admin), this.options).pipe(
  //       map(res => {
  //         return res.json();
  //       }),
  //       catchError(this.handleError));
  // }

  private handleError(error: Response | any) {
    console.log(error);
    return throwError(error); // <= B
  }
}
