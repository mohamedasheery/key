import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TenantsModule } from './uktra/tenants/tenants.module';
import { HomeModule } from './uktra/home/home.module';
import { SharedModule } from './shared/shared/shared.module';
import { EnviromentService } from './enviroment.service';
import { DatePipe } from '@angular/common';
import { ApiClientInterceptor } from './shared/shared/services/api-client.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BrowserAnimationsModule,
    TenantsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    EnviromentService,
    {
      provide: APP_INITIALIZER,
      useFactory: (svc: EnviromentService) => {
        return () => svc.loadAppConfig();
      },
      multi: true,
      deps: [EnviromentService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiClientInterceptor,
      multi: true
    },

    //  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    //  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DatePipe,],

  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
