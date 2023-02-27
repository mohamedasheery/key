import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'shared',
    loadChildren: () =>
      import('./shared/shared/shared.module').then((m) => m.SharedModule),

  },
  {
    path: 'home',
    loadChildren: () => import('./uktra/home/home.module').then((m) => m.HomeModule),
  },

  { path: 'tenants', loadChildren: () => import('./uktra/tenants/tenants.module').then(m => m.TenantsModule) },

  { path: 'users', loadChildren: () => import('./shared/users/users.module').then(m => m.UsersModule) },

  { path: 'roles', loadChildren: () => import('./shared/roles/roles.module').then(m => m.RolesModule) },

  { path: 'companies', loadChildren: () => import('./kay/company/company.module').then(m => m.CompanyModule) },

  { path: 'fields', loadChildren: () => import('./uktra/fields/fields.module').then(m => m.FieldsModule) },

  { path: 'forms', loadChildren: () => import('./uktra/forms/forms.module').then(m => m.FormsModule) },

  { path: 'kay', loadChildren: () => import('./kay/kay.module').then(m => m.KayModule) },

  { path: 'uktra', loadChildren: () => import('./uktra/uktra.module').then(m => m.UktraModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
