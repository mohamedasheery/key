import { Iuser } from './../interfaces/createUser';
// import  environment  from 'env/env';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http:HttpClient) { }
  // userToken = sessionStorage.getItem("Token");
 lastUsers= new BehaviorSubject([]);

  getUsers() {

    return this.http.get('/api/user').pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server');
      })
    );
  }

  getUsersFromPagnation(page?:any) {

    return this.http.get(`/api/user?page=${page}`).pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server');
      })
    );
  }

  addNewUser(user:Iuser) {
    return this.http.post('/api/user/create',user ).pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server');
      })
    );
  }

  getSingleUser(id:any) {
    return this.http.get('/api/user/'+id ).pipe(
      catchError((error) => {
        return throwError(() => error.error || 'some error from server');
      })
    );
  }
  updateUser(userUpdated:any,id:any) {
    return this.http.post('/api/user/update/'+id,userUpdated).pipe(
      catchError((error) => {
        return throwError(() => error.error || 'some error from server');
      })
    );
  }
  deleteUser(id:any) {
    return this.http.delete('/api/user/'+id ).pipe(
      catchError((error) => {
        return throwError(() => error.error || 'some error from server');
      })
    );
  }


  setLastUsers(updatedUsers:any){

    return this.lastUsers.next(updatedUsers)
  }
  getLastUsers(): Observable<any>{

    return this.lastUsers
  }

  downloadUsers() {
    return this.http.get('/api/user/data/export').pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server');
      })
    );
  }


}

