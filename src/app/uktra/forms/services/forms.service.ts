import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError, Observable, observable } from 'rxjs';

import environment from 'env/env';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private http: HttpClient) { }

  getFormsFromApi():Observable<any> {
    return this.http.get<any>('/api/form').pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  getFieldsForm(id:any):Observable<any> {
    return this.http.get<any>(`/api/form/${id}/view-fields`).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  fillFormData(values:any[]):Observable<any> {
    // const formData = new FormData()
    // values.forEach(val=>{
    //   formData.append(`value[${val.id}]`,val.value)
    // })
    return this.http.post<any>('/api/form/1/fill-data',values).pipe(
      catchError((error) => {
        return throwError(() => error || 'some error from server ');
      })
    );
  }

}
