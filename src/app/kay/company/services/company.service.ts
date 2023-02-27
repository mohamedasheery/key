import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import  environment  from 'env/env';
import { catchError, throwError, Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http:HttpClient) { }

  userToken = sessionStorage.getItem("Token");

 companies = new BehaviorSubject([]);

 getCompaniesFromServer(fillterParams?:any):Observable<any> {
  if(fillterParams == undefined){

    fillterParams = {
      date_from:'',
      date_to:'',
      tenant_id: '',
     creator_id:'',
    }
  }
  return this.http.get<any>('/api/company', {
      params: {
      date_from:`${fillterParams?.date_from} `,
      date_to: `${fillterParams?.date_to}` ,
      tenant_id: `${fillterParams?.tenant_id}` ,
      creator_id:`${fillterParams?.creator_id} `
    }
}).pipe(
    catchError((error) => {
      return throwError(() => error.message || 'some error from server ');
    })
  );
}
getCompaniesPagination(page?:any):Observable<any> {
  return this.http.get<any>(`/api/company?page=${page}`).pipe(
    catchError((error) => {
      return throwError(() => error.message || 'some error from server ');
    })
  );
}
addCompany(company:any):Observable<any> {
  return this.http.post<any>('/api/company/create',company).pipe(
    catchError((error) => {
      return throwError(() => error || 'some error from server ');
    })
  );
}
getSinglCompany(id:any):Observable<any> {
  return this.http.get<any>('/api/company/'+id).pipe(
    catchError((error) => {
      return throwError(() => error || 'some error from server ');
    })
  );
}

updateCompany(company:any):Observable<any> {
  return this.http.post<any>('/api/company/update/'+company.id, company).pipe(
    catchError((error) => {
      return throwError(() => error || 'some error from server ');
    })
  );
}
getCompanies():Observable<any>{
  return this.companies
}

setCompanies(updatedTenants:any){
  return this.companies.next(updatedTenants)
}



}
