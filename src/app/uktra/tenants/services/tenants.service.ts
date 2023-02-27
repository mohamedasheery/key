import { fillterTenant } from './../interfaces/iFilter';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, catchError, throwError, Observable } from 'rxjs';

import  environment  from 'env/env';
import { EnviromentService } from 'src/app/enviroment.service';
@Injectable({
  providedIn: 'root'
})
export class TenantsService {
  baseUrl: string = '';
  constructor(private http:HttpClient
  
     ) {

   }


  userToken = sessionStorage.getItem("Token");
  lastUpdatedTenants = new BehaviorSubject([]);





  getTenants(fillterParams?:fillterTenant) {

    if(fillterParams == undefined){

      fillterParams = {
        date_from:'',
        date_to:'',
        assigned_id:'',
       industry_type: '',
       creator_id:'',
      }
    }

    return this.http.get('/api/tenant', {
   params: {
        date_from:`${fillterParams?.date_from} `,
        date_to: `${fillterParams?.date_to}` ,
        assigned_id:`${fillterParams?.assigned_id} `,
        industry_type: `${fillterParams?.industry_type}` ,
        creator_id:`${fillterParams?.creator_id} `



      }
  }).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
  getTenantsFromServerPagination(page:any) {

    return this.http.get(`/api/tenant?page=${page}`).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }

  getSinglTenant(id:any) {
    return this.http.get('/api/tenant/' + id).pipe(
      catchError((error) => {
        return throwError(() => error.message || 'some error from server ');
      })
    );
  }
 addTenant(newTenant:any) {
    return this.http.post('/api/tenant/create', newTenant).pipe(
      catchError((error) => {
        return throwError(() => error.error.errors);
      })
    );
  }
  updateTenant(updatedTenant:any) {
    return this.http.post('/api/tenant/update/'+updatedTenant?.id , updatedTenant).pipe(
      catchError((error) => {
        return throwError(() => error.error.errors);
      })
    );
  }

  getlastUpdatedTenants():Observable<any>{
    return this.lastUpdatedTenants
  }
  setlastUpdatedTenants(updatedTenants:any){
    return this.lastUpdatedTenants.next(updatedTenants)
  }
}
