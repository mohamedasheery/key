import { ViewFieldComponent } from './componentes/view-field/view-field.component';
import { AddFieldComponent } from './componentes/add-field/add-field.component';
import { TestDragDropComponent } from './componentes/test-drag-drop/test-drag-drop.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FieldsComponent } from './fields.component';

const routes: Routes = [
  { path: 'drag', component: TestDragDropComponent },
  { path: 'viwe', component: ViewFieldComponent },
  { path: 'add', component:AddFieldComponent  },
  { path: '', component: FieldsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FieldsRoutingModule { }
