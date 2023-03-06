import { TypeFieldDataService } from 'src/app/uktra/fields/services/type-field-data.service';
import { LanguageService } from './../../../../shared/shared/services/language.service';
import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { IField } from './../../classes/IField';
import { ToastrService } from 'ngx-toastr';

import { Component, ElementRef } from '@angular/core';
import { FieldsService } from '../../services/fields.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent {


  constructor(
    private fieldsService: FieldsService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private sharedService: SharedService,
    private elem: ElementRef,
    private typeFieldDataService: TypeFieldDataService) { }

  langField: any = localStorage.getItem('selectedLanguage');
  langText = 'Language';
  titleField = 'Title';
  errorTitleField = ' title is required'

  errorCreateField: any = {
    error: {
      message: ''
    }
  }
  typeFields: any;
  selectedField: any = {
    type: '',
    src: '',
    text: ''
  };
  field: IField = {
    type: '',
    title: {},
    some_requirements: [],
    options: {}
  }
  action:any;


  createFieldForm = this.fb.group({
    title: ['', [Validators.required]],

    fieldType: this.fb.array([]),
    some_requirements: this.fb.group({
      required: [false],
      used_in_Filter: [false],
      unique: [false],

    }),

  });

  get fieldTypeArray() {
    return this.createFieldForm.get('fieldType') as FormArray;
  }
  get fieldTitle() {
    return this.createFieldForm.get('title');
  }
  get fieldRequired() {
    return this.createFieldForm.get('some_requirements.required');
  }
  get fieldFilter() {
    return this.createFieldForm.get('some_requirements.used_in_Filter');
  }
  get fieldUnique() {
    return this.createFieldForm.get('some_requirements.unique');
  }

  addAnotherOption() {
    this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
  }

  deleteOption(index: any) {
    if (this.fieldTypeArray.length > 1) {
      this.fieldTypeArray.removeAt(index)
    } else {
      this.toastr.show('this fieid must have one option or more')
    }

  }
  switchLangField(lang: any) {

    let element = this.elem.nativeElement.querySelector('.formToAddField');
    if (lang == 'ar') {
      this.langField = 'ar';
      this.langText = 'Arbic';
      this.titleField = 'العنوان';
      this.errorTitleField = 'العنوان مطلوب ';

      element.style.direction = 'rtl';
    } else {
      this.langField = 'en';
      this.langText = 'English';
      this.titleField = 'Title';
      this.errorTitleField = 'title is required';
      element.style.direction = 'ltr';

    }
    this.langField = lang
    console.log(lang);

  }

  // fill form to updata
  updateField(ele: any) {
// debugger
 window.scroll({
  top: 0,
  behavior: 'smooth'
});
     console.log(ele);
      this.fieldsService.setActionOnField('update');
      this.fieldsService.setFieldToUpdata(ele);
      this.selectedField.type = ele.type;
   if(ele.some_requirements != null){
     
   }
      this.createFieldForm.patchValue({

        title: ele.title[this.langField],
        some_requirements: {
          required: ele.some_requirements.includes('Required'),
          used_in_Filter: ele.some_requirements.includes('Used in Filter'),
          unique: ele.some_requirements.includes('Unique'),
        },
      })
    this.setOptionsToUpdataField(ele);
    console.log(this.createFieldForm.value);
  }

  setOptionsToUpdataField(ele: any) {

    this.fieldTypeArray.clear();

    if (ele.options.en) {
      if (ele.options.en.length > 0 && ele.options.en[0] != null) {
        ele.options.en.map((opt: any) => {
          this.fieldTypeArray.push(this.fb.control(opt, [Validators.required]));
        })
      }else {
        console.log('no options');
        this.fieldTypeArray.push(this.fb.control(''));
      }
    }

    else if (ele.options.ar) {
      if (ele.options.ar.length > 0 && ele.options.ar[0] != null) {
        ele.options.ar.map((opt: any) => {
          this.fieldTypeArray.push(this.fb.control(opt, [Validators.required]));
        })
      }else {
        console.log('no options');
        this.fieldTypeArray.push(this.fb.control(''));
      }
    }

  }
  sendDataToUpdataField(){
    let singleField:any ;
    this.sharedService.setToggleSpinner(true);
    this.fieldsService.getFieldToUpdata().subscribe((data:any)=>{
      console.log(data);

     singleField = data;
     console.log(singleField);

    //  singleField.title[this.langField] = this.fieldTitle?.value;
    //  singleField.options[this.langField] = this.fieldTypeArray.controls.map(cont => cont.value);
    //   // this.field.type = this.selectedField.type;
    //   singleField.some_requirements = this.getSome_requirements();
    })
        singleField.title[this.langField] = this.fieldTitle?.value;
        singleField.options[this.langField] = this.fieldTypeArray.controls.map(cont => cont.value);
       singleField.some_requirements = this.getSome_requirements();
        console.log(singleField);

      this.fieldsService.updateField(singleField).subscribe((data:any)=>{
      this.sharedService.setToggleSpinner(false);
     this.toastr.success(data.message);
      this.clearForm();
    this.fieldsService.getFieldsFromApi().subscribe((data:any)=>{
      this.fieldsService.setFields(data);
    })
  },(error)=>{
    this.sharedService.setToggleSpinner(false);

     this.toastr.error(error.message);;
  })

  }
  //  set form control to form array
  setFieldType(ele: any) {
    debugger
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
    this.fieldsService.setActionOnField('create');

    if (ele.type == this.selectedField.type) {
      this.typeFieldDataService.setSelectedField(ele);

      switch (ele.type) {

        case 'Text':
          this.fieldTypeArray.clear();
          this.fieldTypeArray.push(this.fb.control(''));
          break;
        case 'Checkbox':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));


          break;
        case 'Radio Button':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'File Upload':
          this.fieldTypeArray.clear();

          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Rating':
          this.fieldTypeArray.clear();

          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'Dropdown':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'TextArea':
          this.fieldTypeArray.clear();
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Toggle Switch':
          this.fieldTypeArray.clear();
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
          break;
        case 'Time Picker':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Image':
          this.fieldTypeArray.clear();
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Number':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Label':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        default: ''
          this.fieldTypeArray.push(this.fb.control(''));

          break;
      }
    }
    else {
      this.fieldTypeArray.clear();
      this.typeFieldDataService.setSelectedField(ele);
      switch (ele.type) {
        case 'Text':
          this.fieldTypeArray.push(this.fb.control(''));
          break;
        case 'Checkbox':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
          break;
        case 'Radio Button':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'File Upload':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Rating':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'Dropdown':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));

          break;
        case 'TextArea':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Toggle Switch':
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
          this.fieldTypeArray.push(this.fb.control('', [Validators.required]));
          break;
        case 'Time Picker':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Image':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Number':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        case 'Label':
          this.fieldTypeArray.push(this.fb.control(''));

          break;
        default: ''
          this.fieldTypeArray.push(this.fb.control(''));

          break;
      }
    }


  }

  getSome_requirements() {

    let requirements: any = [];

    if (this.fieldRequired?.value == true) {
      requirements.push('Required')
    }
    if (this.fieldFilter?.value == true) {
      requirements.push('Used in Filter')
    }
    if (this.fieldUnique?.value == true) {
      requirements.push('Unique')
    }
    return requirements
  }

  clearForm() {

    this.fieldTypeArray.clear();
    this.createFieldForm.reset();
    this.field.some_requirements = [];
    this.field.options = {};
    this.field.title[this.langField] = '';
    this.switchLangField(localStorage.getItem('selectedLanguage'));
    this.langText = 'Language';


  }
  createField() {


    if (this.createFieldForm.invalid) {
      this.toastr.error('some field is Required')

    } else {

      this.sharedService.setToggleSpinner(true);

      this.field.title[this.langField] = this.fieldTitle?.value;
      this.field.options[this.langField] = this.fieldTypeArray.controls.map(cont => cont.value);
      this.field.type = this.selectedField.type;
      this.field.some_requirements = this.getSome_requirements();





      this.fieldsService.addField(this.field).subscribe((data: any) => {
        this.sharedService.setToggleSpinner(false);
        this.fieldsService.getFieldsFromApi().subscribe((data:any)=>{
          this.fieldsService.setFields(data)
        })
        this.toastr.success(data.message);
        this.clearForm();



      }, (error: any) => {
        this.sharedService.setToggleSpinner(false);
        this.toastr.error(error.error.message);
        this.errorCreateField = error;
        console.log(error);
      })


    }


  }

  deleteField() {
   let fieldId:any;
    this.fieldsService.getFieldToUpdata().subscribe((data:any)=>{
      fieldId = data.id;
     console.log(fieldId);
    });
    this.fieldsService.deleteField(fieldId).subscribe((data:any)=>{
      this.toastr.success(data.message);
      this.fieldTypeArray.clear();
      this.fieldsService.getFieldsFromApi().subscribe((data:any)=>{
        this.fieldsService.setFields(data);
      })
    },(error:any)=>{
      this.toastr.error(error.message)
    })

  }
  cancelField() {
    this.fieldTypeArray.clear();

  }


  ngOnInit(): void {
    this.fieldsService.getActionOnField().subscribe((data:any)=>{this.action = data})

    this.typeFieldDataService.getTypefieldData().subscribe((data: any) => {
      this.typeFields = data;

    });
    this.typeFieldDataService.getSelectedField().subscribe((data: any) => {


      this.selectedField = data
    })
  }
}

