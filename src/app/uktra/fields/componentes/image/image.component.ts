import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  constructor(public fb:FormBuilder  ){}
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
}
