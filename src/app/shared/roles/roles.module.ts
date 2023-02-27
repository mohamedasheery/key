import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RoleHeaderComponent } from './componentes/role-header/role-header.component';
import { RoleTableComponent } from './componentes/role-list/role-table.component';

import { NewRoleComponent } from './componentes/new-role/new-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateRoleComponent } from './componentes/update-role/update-role.component';



@NgModule({
  declarations: [
    RolesComponent,
    RoleHeaderComponent,
    RoleTableComponent,
    NewRoleComponent,
    UpdateRoleComponent,


  ],
  imports: [

  CommonModule,
     RolesRoutingModule,

    FormsModule,
    ReactiveFormsModule,

  ]
})
export class RolesModule { }
