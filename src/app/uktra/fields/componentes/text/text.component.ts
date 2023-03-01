import { Component, ElementRef, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { FieldsService } from '../../services/fields.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {
  constructor(public fb:FormBuilder,
      private fieldsService :FieldsService ,
      private toastr: ToastrService,
      private elem: ElementRef,
      private sharedService:SharedService){}
  listError:any;
  langField:any=localStorage.getItem('selectedLanguage');
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
@Input() action: any;
@Input() fields: any;
@Input() setOptionsToUpdataField: any;
@Input() updateField: any;
@Input() field: any;
@Input() switchLangField: any;

ngOnInit(): void {
console.log(this.action);


}

}
