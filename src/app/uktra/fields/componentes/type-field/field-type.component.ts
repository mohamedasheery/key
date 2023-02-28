import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FieldsService } from '../../services/fields.service';
import { TypeFieldDataService } from '../../services/type-field-data.service';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss']
})
export class FieldTypeComponent {
  constructor(private typeFieldDataService:TypeFieldDataService,
    private fieldsService: FieldsService,
    private fb: FormBuilder){}
  typeFields:any;
  selectedField: any ={
    text:'',
    src:'',
    type:''
  };





@Input() fieldTypeArray: any;
@Input() setFieldType: any;


    ngOnInit(): void {
   this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{

    this.typeFields = data;
   })

this.typeFieldDataService.getSelectedField().subscribe((data:any)=>{


  this.selectedField = data})
    }

}
