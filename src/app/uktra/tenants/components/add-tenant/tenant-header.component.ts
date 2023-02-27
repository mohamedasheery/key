import { ITenant } from '../../interfaces/createTenant';
import { ToastrService } from 'ngx-toastr';

import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TenantsService } from '../../services/tenants.service';
import { UsersService } from 'src/app/shared/users/services/users.service';


@Component({
  selector: 'app-tenant-header',
  templateUrl: './tenant-header.component.html',
  styleUrls: ['./tenant-header.component.scss'],
})
export class TenantHeaderComponent {
  constructor(private formBuilder: FormBuilder,
    private tenantsService:TenantsService,
    private usersService: UsersService,
    private toastr:ToastrService) {}
errors:any;
spinner:boolean=true;
responsesAddTenants:any;
users:any={
  data:[]
};
  // newTenant: any = {
  //   name: '',
  //   email: '',
  //   domain: '',
  //   phone: '',
  //   password: '',
  //   password_confirmation: '',
  //   status: '',
  //   plan: '',
  //   industry_type: '',
  //   assigned_id:'',

  // };
  addNewTenant = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3,})+ ?([A-Za-z]{3,})* ?([A-Za-z]{3,})*$')]],
    email: ['',[Validators.required ,Validators.pattern('^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$')]],
    status: ['',[Validators.required]],
    plan:['',[Validators.required]],
    industry_type: ['',[Validators.required]],
    assigned_id: ['',[Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    domain: ['', [Validators.required,Validators.pattern('^([A-Za-z]{1,})+[A-Za-z0-9_]{8,}$')]],
    password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8,}')]],
    password_confirmation: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{8,}')]],

  });

  get tenantName() {
    return this.addNewTenant.get('name');
  }
  get tenantEmail() {
    return this.addNewTenant.get('email');
  }
  get tenantDomain() {
    return this.addNewTenant.get('domain');
  }
  get tenantPhone() {
    return this.addNewTenant.get('phone');
  }
  get tenantPassword() {
    return this.addNewTenant.get('password');
  }
  get tenantCPassword() {
    return this.addNewTenant.get('password_confirmation');
  }
  get tenantStatus() {
    return this.addNewTenant.get('status');
  }
  get tenantPlan() {
    return this.addNewTenant.get('plan');
  }
  get tenantIndustryType() {
    return this.addNewTenant.get('industry_type');
  }
  get tenantAssignedEmployee() {
    return this.addNewTenant.get('assigned_id');
  }

  getNewTenant(){
    this.spinner=false;

    // this.newTenant.name = this.tenantName?.value;
    // this.newTenant.email = this.tenantEmail?.value;
    // this.newTenant.domain = this.tenantDomain?.value;
    // this.newTenant.phone = this.tenantPhone?.value;
    // this.newTenant.password = this.tenantPassword?.value;
    // this.newTenant.password_confirmation = this.tenantCPassword?.value;
    // this.newTenant.status = this.tenantStatus?.value;
    // this.newTenant.plan = this.tenantPlan?.value;
    // this.newTenant.industry_type = this.tenantIndustryType?.value;
    // this.newTenant.assigned_id = this.tenantAssignedEmployee?.value;

 let tenant:ITenant = this.addNewTenant.value as unknown as ITenant;


 console.log(tenant);


    this.tenantsService.addTenant(tenant).subscribe(
      (data)=>{


        this.spinner=true;

        this.responsesAddTenants= data;
        this.toastr.success(this.responsesAddTenants.message);
        this.closeModal?.nativeElement.click();
        this.errors=null;
         this.tenantsService.getTenants().subscribe((data)=>{
          this.tenantsService.setlastUpdatedTenants(data);
         })


      },(error)=>{
        console.log(error);

        this.spinner=true;

        this.responsesAddTenants= error;
        this.toastr.error('Error','message');
        this.errors = error;
      })

  }
  @ViewChild('closeModal') closeModal: ElementRef | undefined;
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data:any)=>{


      this.users =data;
    })

  }
}
