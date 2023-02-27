
import { Component } from '@angular/core';
import { TenantsService } from '../../services/tenants.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from 'src/app/shared/users/services/users.service';

@Component({
  selector: 'app-tenant-filter',
  templateUrl: './tenant-filter.component.html',
  styleUrls: ['./tenant-filter.component.scss']
})
export class TenantFilterComponent { 
  constructor(private formBuilder: FormBuilder, private tenantsService: TenantsService,
    private usersService: UsersService) { }
  users: any = {
    data: []
  };
  response:boolean=true;
errorListUsers:any
  fillterTenant: any = {

    date_from: '',
    date_to: '',
    assigned_id: '',
    industry_type: '',
    creator_id: '',

  };
  filterTenantForm = this.formBuilder.group({
    date_from: [''],
    date_to: [''],
    IndustryType: [''],
    AssignedEmployee: [''],
    creatorEmployee: ['']
  });

  get DateFrom() {
    return this.filterTenantForm.get('date_from');
  }
  get DateTo() {
    return this.filterTenantForm.get('date_to');
  } get IndustryType() {
    return this.filterTenantForm.get('IndustryType');
  } get AssignedEmployee() {
    return this.filterTenantForm.get('AssignedEmployee');
  } get creatorEmployee() {
    return this.filterTenantForm.get('creatorEmployee');
  }
  filter() {
    this.response = false;
    this.fillterTenant.date_from = this.DateFrom?.value;
    this.fillterTenant.date_to = this.DateTo?.value;
    this.fillterTenant.assigned_id = this.AssignedEmployee?.value;
    this.fillterTenant.industry_type = this.IndustryType?.value;
    this.fillterTenant.creator_id = this.creatorEmployee?.value;
    console.log(this.fillterTenant);
    this.tenantsService.getTenants(this.fillterTenant).subscribe((data:any) => {
   
    this.response = true;

      this.tenantsService.setlastUpdatedTenants(data);
    }, (error) => {
     
    this.response = true;

    })

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    }, (error) => {
      this.errorListUsers =error
    })


  }
}
