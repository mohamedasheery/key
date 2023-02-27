import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
      private sharedService:SharedService){}
  listError:any;

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

ngOnInit(): void {
console.log(this.action);


}

}
