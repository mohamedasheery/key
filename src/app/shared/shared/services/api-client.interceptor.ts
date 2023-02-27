import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import environment from 'env/env';
import { EnviromentService } from 'src/app/enviroment.service';

@Injectable()
export class ApiClientInterceptor implements HttpInterceptor {

  constructor(private enviromentService: EnviromentService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    // let requestUrl = environment.baseUrl + req.url;
     let requestUrl = this.enviromentService.appConfig?.keyApi + req.url;
   

    // if (requestUrl.indexOf(‘@api-x’) !== -1) {
    //   requestUrl = requestUrl.replace(‘@api-x’, environment.api);
    // }
    if (!req.url.includes('.json')) {

      req = req.clone({
        url: requestUrl,
        setHeaders: {
          'Authorization': `Bearer ${sessionStorage.getItem('Token')}`,
          'X.localization': localStorage.getItem('selectedLanguage') ?? 'en',
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
        }
      });
    }

    return next.handle(req);
  }
}
