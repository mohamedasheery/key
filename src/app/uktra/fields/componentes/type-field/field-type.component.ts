import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TypeFieldDataService } from '../../services/type-field-data.service';

@Component({
  selector: 'app-field-type',
  templateUrl: './field-type.component.html',
  styleUrls: ['./field-type.component.scss']
})
export class FieldTypeComponent {
  constructor(private typeFieldDataService:TypeFieldDataService,private fb: FormBuilder){}
  typeFields:any;
  selectedField: any ={
    text:'',
    src:'',
    type:''
  };


  changeType(ele: any) {
    // console.log(ele.src.slice(22,ele.src.length));
    // console.log(type.innerHTML);


    // this.typeField.src  = ele.src


  }


@Input() fieldTypeArray: any;
@Input() setFieldType: any;
// @Input() selectedField: any;

    ngOnInit(): void {
   this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{

    this.typeFields = data;
   })

this.typeFieldDataService.getSelectedField().subscribe((data:any)=>{


  this.selectedField = data})
    }

}
