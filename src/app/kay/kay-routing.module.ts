import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KayComponent } from './kay.component';

const routes: Routes = [{ path: '', component: KayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KayRoutingModule { }
