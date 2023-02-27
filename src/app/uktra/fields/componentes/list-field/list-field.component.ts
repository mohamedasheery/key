import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-list-field',
  templateUrl: './list-field.component.html',
  styleUrls: ['./list-field.component.scss']
})
export class ListFieldComponent {

    constructor(
       private fieldsService: FieldsService,
       private sharedService:SharedService,
      private fb:FormBuilder,
      private toastr: ToastrService){}
fields:any={
  data:[]
};

listError:any;
sendEle(ele:any){
  console.log(ele);

}
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() updateField: any;
@Input() createFieldForm: any;
@Input() setOptionsToUpdataField: any;
@Input() action: any;
@Input() field: any;

    ngOnInit(): void {

      this.sharedService.setToggleSpinner(true);
      this.fieldsService.getFieldsFromApi().subscribe((data:any)=>{
        this.fields=data
        this.fieldsService.setFields(data);
        this.fieldsService.getFields().subscribe((data:any)=>{
          console.log(data);
          this.fields=data});
     ;
      this.sharedService.setToggleSpinner(false);


      },(error)=>{
      this.sharedService.setToggleSpinner(false);

        this.listError = error
        console.log(error);
      })

    }
}
