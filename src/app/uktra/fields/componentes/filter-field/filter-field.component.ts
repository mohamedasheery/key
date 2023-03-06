import { FieldsService } from './../../services/fields.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeFieldDataService } from '../../services/type-field-data.service';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent  {

constructor(private typeFieldDataService:TypeFieldDataService,private fb: FormBuilder,private fieldsService :FieldsService ){}
  typeFields:any;
  selectedField: any ={
    text:'',
    src:'',
    type:''
  };


  setSelectedField(ele: any) {
    console.log(ele);
    this.typeFieldDataService.setSelectedField(ele)

  }

fillterFildes(){
  console.log(this.selectedField.type);
this.fieldsService.getFieldsFromApiWithFillter(this.selectedField.type).subscribe((data:any)=>{
  console.log(data);

},(error:any)=>{console.log(error);
})
}


    ngOnInit(): void {
   this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{

    this.typeFields = data;
   })

this.typeFieldDataService.getSelectedField().subscribe((data:any)=>{

  this.selectedField = data})
    }

}

