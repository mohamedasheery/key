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
import { SharedService } from 'src/app/shared/shared/services/shared.service';

@Component({
  selector: 'app-tenant-table',
  templateUrl: './tenant-table.component.html',
  styleUrls: ['./tenant-table.component.scss'],
})
export class TenantTableComponent {
  constructor(
    private formBuilder: FormBuilder,
    private tenantsService: TenantsService,
    private sharedService: SharedService,
    private toastr: ToastrService,
    private usersService: UsersService
  ) { }
  users: any = {
    data: []
  }
  tenantId: any
  tenants: any = {
    data: [],
    meta: { current_page: '' }
  };
  response: boolean = true;
  updateErrors: any;
  listTenantsError: string = '';
  message: string = 'no tenants found';
  spinner: boolean = true;

  singlTenant: any = {
    data: {
      name: '',
      email: '',
      phone: '',
      status: '',
      plan: '',
      industry_type: '',
      assigned: '',
      domain: '',
      assigned_id: ''
    }

  }
  updateTenant = this.formBuilder.group({
    tenantName: [
      '',
      [Validators.required, Validators.pattern('^([A-Za-z]{3,16})+ ?([A-Za-z]{3,16})*$')],
    ],
    tenantEmail: [
      '',
      [
        Validators.required,
        Validators.pattern('^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$'),
      ],
    ],
    tenantStatus: ['', [Validators.required]],
    tenantPlan: ['', [Validators.required]],
    tenantIndustryType: ['', [Validators.required]],
    tenantAssignedEmployee: ['', [Validators.required]],
    tenantPhone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    domain: ['', [Validators.required, Validators.pattern('^([A-Za-z]{1,})+[A-Za-z0-9_]{8,}$')]],

  });

  get tenantName() {
    return this.updateTenant.get('tenantName');
  }
  get tenantEmail() {
    return this.updateTenant.get('tenantEmail');
  }

  get tenantPhone() {
    return this.updateTenant.get('tenantPhone');
  }

  get tenantStatus() {
    return this.updateTenant.get('tenantStatus');
  }
  get tenantPlan() {
    return this.updateTenant.get('tenantPlan');
  }
  get tenantIndustryType() {
    return this.updateTenant.get('tenantIndustryType');
  }
  get tenantAssignedEmployee() {
    return this.updateTenant.get('tenantAssignedEmployee');
  }
  get tenantDomain() {
    return this.updateTenant.get('domain');
  }

  updataTenant() {
    this.spinner = false;
    this.singlTenant.data.name = this.tenantName?.value;
    this.singlTenant.data.email = this.tenantEmail?.value;
    this.singlTenant.data.phone = this.tenantPhone?.value;
    this.singlTenant.data.status = this.tenantStatus?.value;
    this.singlTenant.data.plan = this.tenantPlan?.value;
    this.singlTenant.data.industry_type = this.tenantIndustryType?.value;
    this.singlTenant.data.assigned_id = this.tenantAssignedEmployee?.value;
    this.singlTenant.data.domain = this.tenantDomain?.value;


    this.tenantsService.updateTenant(this.singlTenant.data)
      .subscribe(
        (data) => {
          this.spinner = true;

          this.toastr.success('updeted successfully');
          this.closeModal?.nativeElement.click();
          this.tenantsService.getTenants().subscribe((data) => {
            this.tenantsService.setlastUpdatedTenants(data);
          });
        },
        (error) => {
          this.spinner = true;
          this.toastr.error('Error');

          this.updateErrors = error;

        }
      );
  }
  // fill form
  getDataTenantToUpdata(id: any) {
    console.log(id);
    this.tenantId = id;

    this.tenantsService.getSinglTenant(id).subscribe((data: any) => {
      this.singlTenant = data;

      this.updateTenant.patchValue({
        tenantName: this.singlTenant.data.name,
        tenantEmail: this.singlTenant.data.email,
        tenantStatus: this.singlTenant.data.status,
        tenantPlan: this.singlTenant.data.plan,
        tenantIndustryType: this.singlTenant.data.industry_type,
        tenantAssignedEmployee: this.singlTenant.data.assigned_id,
        tenantPhone: this.singlTenant.data.phone,
        domain: this.singlTenant.data.domain
      });


    })



  }

  pagination(type: any) {

    this.sharedService.setToggleSpinner(true);
    if (type == 'next' && this.tenants?.meta?.current_page < this.tenants?.meta?.last_page) {

      this.tenantsService.getTenantsFromServerPagination(this.tenants?.meta?.current_page + 1).subscribe((data: any) => {
        this.sharedService.setToggleSpinner(false);
        console.log(data);

        this.tenants = data;
      });

    }
    if (type == 'prev' && this.tenants?.meta?.current_page > 1) {
      this.tenantsService.getTenantsFromServerPagination(this.tenants?.meta?.current_page - 1).subscribe((data: any) => {
        this.sharedService.setToggleSpinner(false);
        console.log(data);

        this.tenants = data;
      })
    }




  }
  @ViewChild('closeModal') closeModal: ElementRef | undefined
  ngOnInit(): void {
    this.tenantsService.getTenants().subscribe(
      (data: any) => {
        this.tenants = data;
        this.response = false;
        this.tenantsService.setlastUpdatedTenants(data);
        this.tenantsService.getlastUpdatedTenants().subscribe((data: any) => {
          this.tenants = data;
        });
      },
      (error) => {
        this.response = false;
        this.listTenantsError = error;
      }
    );
    this.usersService.getUsers().subscribe((data: any) => { this.users = data })


  }
}
