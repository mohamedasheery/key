import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRoleComponent } from './componentes/new-role/new-role.component';
import { UpdateRoleComponent } from './componentes/update-role/update-role.component';
import { RolesComponent } from './roles.component';

const routes: Routes = [
  { path: '', component: RolesComponent },
  { path: 'update/:id', component: UpdateRoleComponent },
  { path: 'new', component: NewRoleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
