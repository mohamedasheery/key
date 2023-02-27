import { Component, Input,Output, EventEmitter  } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FieldsService } from '../../services/fields.service';
import { TypeFieldDataService } from '../../services/type-field-data.service';

@Component({
  selector: 'app-category-field',
  templateUrl: './category-field.component.html',
  styleUrls: ['./category-field.component.scss']
})
export class CategoryFieldComponent {
  constructor(
    private typeFieldDataService:TypeFieldDataService,
    private fieldsService:FieldsService,
    private fb: FormBuilder){}
typeFields:any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() selectedField: any;
@Output() action = new EventEmitter<any>();
addNewItem(value: any) {
  this.action.emit(value);
}
  ngOnInit(): void {
 this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{

  this.typeFields = data;
 })

  }
}
