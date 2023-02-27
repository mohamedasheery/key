import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  constructor(public fb:FormBuilder  ){}
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
}
