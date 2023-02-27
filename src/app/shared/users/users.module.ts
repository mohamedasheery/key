import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersHeaderComponent } from './components/users-header/users-header.component';
import { UsersTableComponent } from './components/users-list/users-table.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UsersHeaderComponent,
    UsersTableComponent
  ],
  imports: [

  CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,


  ]
})
export class UsersModule { }
