import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError, Observable, observable } from 'rxjs';

import environment from 'env/env';
@Injectable({
  providedIn: 'root'
})
export class FieldsService {
  constructor(private http: HttpClient) { }
actionOnField = new BehaviorSubject('create');
 fieldToUpdata = new BehaviorSubject({});
 fields = new BehaviorSubject([]);
  getFieldsFromApi() {
    return this.http.get('/api/field?page=1', {
      headers: environment.headers
    }).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  updateField(field:any) {
    return this.http.post('/api/field/update/'+field.id,field ).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  deleteField(id:any) {
    return this.http.delete('/api/field/'+id).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  addField(field:any) {
    return this.http.post('/api/field/create', field ).pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server ');
      })
    );
  }

  setActionOnField(value:any){
      this.actionOnField.next(value)
  }
  getActionOnField():Observable<any>{
    return this.actionOnField
 }
 setFieldToUpdata(value:any){
  this.fieldToUpdata.next(value)
}
getFieldToUpdata():Observable<any>{
return this.fieldToUpdata
}
getFields():Observable<any>{
  return this.fields
  }
  setFields(value:any){
    this.fields.next(value)
  }
}
