
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { environment } from './Enviroment';

@Injectable()
export class EnviromentService {
  public appConfig!: environment;

  constructor(private http: HttpClient) { }

  loadAppConfig() {

    return this.http.get('/assets/appsettings.json').toPromise().then(data => {
      this.appConfig = data as environment;
      // console.log(data);

    });
  }
}
