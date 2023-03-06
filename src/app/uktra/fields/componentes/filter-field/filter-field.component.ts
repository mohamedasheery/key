
import { SharedService } from './../../../../shared/shared/services/shared.service';
import { FieldsService } from './../../services/fields.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeFieldDataService } from '../../services/type-field-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent  {

constructor(private typeFieldDataService:TypeFieldDataService,
  private sharedService:SharedService,
  private fb: FormBuilder,
  private toastr:ToastrService,
  private fieldsService :FieldsService ){}
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
this.sharedService.setToggleSpinner(true);
  console.log(this.selectedField.type);
this.fieldsService.getFieldsFromApiWithFillter(this.selectedField.type).subscribe((data:any)=>{
this.sharedService.setToggleSpinner(false);
this.fieldsService.setFields(data);
  

},(error:any)=>{
this.sharedService.setToggleSpinner(false);
this.toastr.error(error.message);


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

