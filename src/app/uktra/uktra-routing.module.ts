import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UktraComponent } from './uktra.component';

const routes: Routes = [{ path: '', component: UktraComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UktraRoutingModule { }
