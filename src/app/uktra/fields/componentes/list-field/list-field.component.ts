import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { Component, ElementRef, Input } from '@angular/core';
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
      private elem: ElementRef,
      private toastr: ToastrService){}

fields: any = {
  data: [],
 current_page: 1
};
response:boolean = false;

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
@Input() switchLangField: any;
@Input() langField: any;

pagination(type: any) {

  this.sharedService.setToggleSpinner(true);
  if (type == 'next' && this.fields?.meta?.current_page < this.fields?.meta?.last_page) {

    this.fieldsService.getFieldsFromServerPagination(this.fields?.meta?.current_page + 1).subscribe((data: any) => {
      this.sharedService.setToggleSpinner(false);
      console.log(data);

      this.fields = data;
    });

  }
  if (type == 'prev' && this.fields?.meta?.current_page > 1) {
    this.fieldsService.getFieldsFromServerPagination(this.fields?.meta?.current_page - 1).subscribe((data: any) => {
      this.sharedService.setToggleSpinner(false);
      console.log(data);

      this.fields = data;
    })
  }




}

// pagination(type: any) {

//   this.sharedService.setToggleSpinner(true);
//   if (type == 'next' && this.fields?.current_page < this.fields?.last_page) {

//     this.fieldsService.getFieldsFromServerPagination(this.fields?.current_page + 1).subscribe((data: any) => {
//       this.sharedService.setToggleSpinner(false);
//       console.log(data);

//       this.fields = data;
//     });

//   }
//   if (type == 'prev' && this.fields?.current_page > 1) {
//     this.fieldsService.getFieldsFromServerPagination(this.fields?.current_page - 1).subscribe((data: any) => {
//       this.sharedService.setToggleSpinner(false);
//       console.log(data);

//       this.fields = data;
//     })
//   }




// }
    ngOnInit(): void {

      this.sharedService.setToggleSpinner(true);
      this.fieldsService.getFieldsFromApi().subscribe((data:any)=>{
        this.fieldsService.setFields(data);
        this.fieldsService.getFields().subscribe((data:any)=>{
          this.response = true;
          this.fields=data});
      this.sharedService.setToggleSpinner(false);
      },(error)=>{
      this.sharedService.setToggleSpinner(false);

        this.listError = error

      })

    }
}
