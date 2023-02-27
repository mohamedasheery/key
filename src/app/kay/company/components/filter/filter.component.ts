
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { TenantsService } from 'src/app/uktra/tenants/services/tenants.service';
import { UsersService } from 'src/app/shared/users/services/users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  constructor(private formBuilder: FormBuilder, private tenantsService: TenantsService,
    private usersService: UsersService,private companyService:CompanyService) { }
    tenants:any={
      data:[]
    }
  users: any = {
    data: []
  }
  response:boolean=true;
errorListUsers:any;
errorListTenant:any;

  fillterCompany: any = {

    date_from: '',
    date_to: '',
    assigned_id: '',
   tenant_id: '',
    creator_id: '',

  };
  filterCompanyForm = this.formBuilder.group({
    date_from: [''],
    date_to: [''],
    AssignedTenant: [''],
    AssignedEmployee: [''],
    creatorEmployee: ['']
  });

  get DateFrom() {
    return this.filterCompanyForm.get('date_from');
  }
  get DateTo() {
    return this.filterCompanyForm.get('date_to');
  } get AssignedTenant() {
    return this.filterCompanyForm.get('AssignedTenant');
  } get AssignedEmployee() {
    return this.filterCompanyForm.get('AssignedEmployee');
  } get creatorEmployee() {
    return this.filterCompanyForm.get('creatorEmployee');
  }
  filter() {
    this.response = false;
    this.fillterCompany.date_from = this.DateFrom?.value;
    this.fillterCompany.date_to = this.DateTo?.value;
    this.fillterCompany.assigned_id = this.AssignedEmployee?.value;
    this.fillterCompany.tenant_id = this.AssignedTenant?.value;
    this.fillterCompany.creator_id = this.creatorEmployee?.value;
    console.log(this.fillterCompany);
    this.companyService.getCompaniesFromServer(this.fillterCompany).subscribe((data) => {
      console.log(data);
      this.response = true;
      this.companyService.setCompanies(data);
    }, (error) => {
      console.log(error);
      this.response = true;
    })

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
  
      this.users = data;
    }, (error) => {
      this.errorListUsers =error
    })
    this.tenantsService.getTenants().subscribe((data) => {
      console.log(data);
      
     this.tenants =data;
   
    }, (error) => {
      console.log(error);
      this.errorListTenant = error;
    })

  }
}
