import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
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
    private toastrService: ToastrService) { }
  fieldsForm: any= [];
  activeId: any;
  errorListFieldsForm: any;

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


      })
    });
  }
}
