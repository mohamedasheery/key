import { FormsService } from './../../services/forms.service';
import { FieldsService } from './../../../fields/services/fields.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeFieldDataService } from 'src/app/uktra/fields/services/type-field-data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  constructor(    private router: Router,
    private route: ActivatedRoute,
    private formsService:FormsService,
    private typeFieldDataService:TypeFieldDataService){}
typeFields:any;
activeId:any;
  ngOnInit(): void {
 this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{
  console.log(data);
  this.typeFields = data;
 });
 this.route.paramMap.subscribe((params:any) => {
  console.log(params.params.id);

  this.activeId = params.params.id;
  this.formsService.getFieldsForm(this.activeId).subscribe((data: any) => {

console.log(data.data.fields
  );



  }, (error) => {

    console.log(error);

  })
});

  }
}
