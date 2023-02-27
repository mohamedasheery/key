import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {
  constructor(public fb:FormBuilder  ){}
@Input() addAnotherOption: any;
@Input() selectedField: any;
@Input() setFieldType: any;
@Input() fieldTypeArray: any;
@Input() deleteOption: any;
@Input() createFieldForm: any;
}
