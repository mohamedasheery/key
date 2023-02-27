import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';
import { TenantHeaderComponent } from './components/add-tenant/tenant-header.component';

import { TenantFilterComponent } from './components/filter-tenant/tenant-filter.component';
import { TenantTableComponent } from './components/list-tenant/tenant-table.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TenantsComponent,
    TenantHeaderComponent,
    TenantFilterComponent,
    TenantTableComponent
  ],
  imports: [


  CommonModule,
    TenantsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[TenantHeaderComponent]
})
export class TenantsModule { }
