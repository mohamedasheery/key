
import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-drag-drop',
  templateUrl: './test-drag-drop.component.html',
  styleUrls: ['./test-drag-drop.component.scss']
})
export class TestDragDropComponent {
  form: FormGroup | any;
  supportedLocales = [
    { lang: { locale: 'en-US' } },
    { lang: { locale: 'en-FR' } },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      template: ['default', [Validators.required]],
      is_home: [0],
      translatable: this.fb.array(this.supportedLocales.map(locale => this.getFormGroupForLocale(locale)))
    });
  }

  private getFormGroupForLocale(language:any) {
    return this.fb.group({
      title: [language.lang.locale + 'Title', [Validators.required]],
      body: [language.lang.locale + 'Body', [Validators.required]]
    });
  }



  get localeFormArray() {
    return (<FormArray>this.form.get('translatable')).controls;
  }
}
