import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeFieldDataService } from '../../services/type-field-data.service';

@Component({
  selector: 'app-filter-field',
  templateUrl: './filter-field.component.html',
  styleUrls: ['./filter-field.component.scss']
})
export class FilterFieldComponent  {
  constructor(private typeFieldDataService:TypeFieldDataService,private fb: FormBuilder){}
  typeFields:any;
  selectedField: any ={
    text:'',
    src:'',
    type:''
  };


  // changeType(ele: any) {
  //   console.log(ele.src.slice(22,ele.src.length));

  //   this.selectedField.text  = ele.type;
  //   this.selectedField.src  = ele.src.slice(22,ele.src.length);


  // }




    ngOnInit(): void {
   this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{

    this.typeFields = data;
   })

this.typeFieldDataService.getSelectedField().subscribe((data:any)=>{

  this.selectedField = data})
    }

}

