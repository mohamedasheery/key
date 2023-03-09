import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private route: ActivatedRoute,
    private sharedService: SharedService,
    private formsService: FormsService,
    private toastr: ToastrService) { }
  fieldsForm: any = [];
  activeId: any;
  errorListFieldsForm: any;
  langField: any = localStorage.getItem('selectedLanguage')
  // chooseFile($event:any){console.log($event?.target?.files[0] as any); }
  errorFillData: any;
  options: any = [];
  values: any = new FormData();
  selectedRating: any = {};
  ToggleSwitch:boolean=false;
  fillData() {
    this.sharedService.setToggleSpinner(true);
    this.formsService.fillFormData(this.activeId,this.values).subscribe((data: any) => {
      this.sharedService.setToggleSpinner(false);
      this.toastr.success(data.message);
      this.clearFormData();
    }, (error: any) => {
      this.toastr.error(error.error.message)
      this.sharedService.setToggleSpinner(false);
      console.log(error);
    })

  }
  getDataFromField(ele: any, e: any) {

    //  debugger
    let val: any
    switch (ele.type) {
      case 'Text':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.value);
        break;
      case 'File Upload':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.files[0]);
        break;
      case 'Dropdown':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e);
        break;
      case 'TextArea':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.value);
        break;
      case 'Time Picker':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.value);
        break;
      case 'Image':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.files[0]);
        break;
        case 'Label':
        this.values.delete(`value[${ele.form_field_id}]`);
        this.values.append(`value[${ele.form_field_id}]`, e.target.value);
        break;
        case 'Radio Button':
          this.values.delete(`value[${ele.form_field_id}]`);
          this.values.append(`value[${ele.form_field_id}]`, e.target.value);
          console.log(e.target.value);

          break;

      default:
        break;
    }
    console.log(this.values);
  }

  getCheckBoxvalue(event: any, opt: any, id: any) {

    if (event.target.checked == true) {
      this.options.push(opt)
    }
    else if (event.target.checked == false && this.options.includes(opt)) {
      this.options = this.options.filter((option: any) => option != opt)
    }

    this.values.delete(`value[${id}][]`);
    this.options.forEach((option: any) => {
      this.values.append(`value[${id}][]`, option)
    })
    // console.log(this.options);
    // console.log(this.values);
  }
  setSelectedIndexRating(ele: any, i: any, opt: any) {
    this.selectedRating.index = i;
    this.selectedRating.option = opt;
    this.values.append(`value[${ele.form_field_id}]`, i + 1)
  }
  getToggleSwitchValue(ele:any,val:any){
    this.ToggleSwitch = !val
    console.log(this.ToggleSwitch);
    this.values.delete(`value[${ele.form_field_id}]`);
    this.values.append(`value[${ele.form_field_id}]`, this.ToggleSwitch);
  }

  clearFormData() {
    this.values = new FormData();
    this.options = [];
    this.reset?.nativeElement.click();
    this.selectedRating = {};
    this.numberField = 0;
  }
  numberField:number=0;
 getNumberField(ele:any,type:any){
     if(type == 'increment'){
      this.numberField+=1
     }else{
      this.numberField-=1

     }
     this.values.delete(`value[${ele.form_field_id}]`);
     this.values.append(`value[${ele.form_field_id}]`, this.numberField);

  }
  @ViewChild('reset') reset: ElementRef | undefined;

  ngOnInit(): void {
    this.sharedService.setToggleSpinner(true);
    this.route.paramMap.subscribe((params: any) => {

      this.activeId = params.params.id;
      this.formsService.getFieldsForm(this.activeId).subscribe((data: any) => {
       
        this.fieldsForm = data.data.fields;


        this.sharedService.setToggleSpinner(false);

        console.log(data.data.fields);
      }, (error) => {
        this.errorListFieldsForm = error;
        console.log(error);
        this.sharedService.setToggleSpinner(false);
        // const formData = new FormData()
        // formData.append('image', image)

      })
    });
  }

}
