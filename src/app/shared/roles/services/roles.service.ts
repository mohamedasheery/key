import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import  environment  from 'env/env';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http:HttpClient) { }
  // userToken = sessionStorage.getItem("Token");

 lastupdatedRoles = new BehaviorSubject([]);
 lastUpdatedPermission = new BehaviorSubject([]);

  getRolesFromServer():Observable<any> {
    return this.http.get<any>('/api/role').pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  getRolesFromServerPagination (page:any):Observable<any> {
    return this.http.get<any>(`/api/role?page=${page}`).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  getPermission():Observable<any> {
    return this.http.get<any>('/api/permission').pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }

  getLastUpdatedRoles(): Observable<any>{
  return this.lastupdatedRoles
}
setLastUpdatedRoles(updatedRoles:any){
  return this.lastupdatedRoles.next(updatedRoles)
}

getlastUpdatedPermissions(): Observable<any>{
  return this.lastUpdatedPermission
}
setlastUpdatedPermissions(updatedpermissions:any){
  return this.lastUpdatedPermission.next(updatedpermissions)
}

addRole(role:any):Observable<any> {
  return this.http.post<any>('/api/role/create',role ).pipe(
    catchError((error) => {
      return throwError(() => error.error || 'some error from server ');
    })
  );
}

deleteRole(id:any):Observable<any> {
  return this.http.delete<any>('/api/role/'+id ).pipe(
    catchError((error) => {
      return throwError(() => error.error || 'some error from server ');
    })
  );
}
getRole(id:any):Observable<any> {
  return this.http.get<any>('/api/role/'+id ).pipe(
    catchError((error) => {
      return throwError(() => error.error || 'some error from server ');
    })
  );
}
updateRole(id:any,role:any):Observable<any> {
  return this.http.post<any>('/api/role/update/'+id , role).pipe(
    catchError((error) => {
      return throwError(() => error.error || 'some error from server ');
    })
  );
}

}
