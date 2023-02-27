import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { httpTranslateLoader } from 'src/app/app.module';


@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidebarComponent,
    SpinnerComponent,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),

  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
