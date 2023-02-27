import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  constructor(public fb:FormBuilder  ){}
numberField:number=0;
changeNumberField(type:any){
   if(type == 'increment'){
    this.numberField+=1
   }else{
    this.numberField-=1

   }
}

@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
}
