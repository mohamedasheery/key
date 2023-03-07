import { ViewVersionFormComponent } from './components/view-version-form/view-version-form.component';
import { VersionFormComponent } from './components/version-form/version-form.component';
import { ResponsesFormComponent } from './components/responses-form/responses-form.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';
import { ViewComponent } from './components/view-form/view.component';
import { AddComponent } from './components/add-form/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { ListComponent } from './components/list-form/list.component';

const routes: Routes = [
{ path: '', component: FormsComponent },
{ path: 'add/:id', component: AddComponent },
{ path: 'edit', component: EditFormComponent },
{ path: 'version', component: VersionFormComponent },
{ path: 'version/view', component: ViewVersionFormComponent },
{ path: 'responses', component: ResponsesFormComponent },
{ path: 'view', component: ViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
