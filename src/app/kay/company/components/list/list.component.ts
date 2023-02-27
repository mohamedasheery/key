
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { TenantsService } from 'src/app/uktra/tenants/services/tenants.service';

import { CompanyService } from '../../services/company.service';
TenantsService
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  constructor(private companyService: CompanyService,
    private formBuilder: FormBuilder,

    private tenantsService: TenantsService,
    private sharedService:SharedService,
    private router: Router,
    private toastr: ToastrService) { }
  test: string = 'text-danger';
  companies: any = {
    data: [],
    meta: { current_page: '' }
  };
  errorListCompanies: any;
  errorsinglCompany: any;
  singlCompany: any;
  tenants: any =
    {
      data: []
    };
  errorListTenants: any;
  message: string = 'not found companies';
  response: boolean = true;


  company = this.formBuilder.group({
    companyName: ['', [Validators.required, Validators.pattern('^([A_Za-z]{3,})+ ?([A_Za-z]{3,})*$')]],
    companyStatus: ['', [Validators.required]],
    AssignedTenant: ['', [Validators.required]],
  });
  get companyName() {
    return this.company.get('companyName')
  }

  get companyStatus() {
    return this.company.get('companyStatus')
  }
  get AssignedTenant() {
    return this.company.get('AssignedTenant')
  }

  getDataCompanyToUpdata(company: any) {


    this.companyService.getSinglCompany(company.id).subscribe((data) => {
      console.log();


      this.singlCompany = data;
      this.fillFormCompany();

    }, (error) => {
      this.errorsinglCompany = error;
      console.log(error);
    })

  }

  fillFormCompany() {
    this.company.patchValue({
      companyName: this.singlCompany.name,
      companyStatus: this.singlCompany.status,
      AssignedTenant: this.singlCompany.tenant_id,

    })
  }
  updateCompany() {
    this.singlCompany.name = this.companyName?.value;
    this.singlCompany.status = this.companyStatus?.value;
    this.singlCompany.tenant_id = this.AssignedTenant?.value;
    this.companyService.updateCompany(this.singlCompany).subscribe((data) => {

      this.toastr.success(data.message);
      this.closeModal?.nativeElement.click();
      this.companyService.getCompaniesFromServer().subscribe((data) => {
        this.companyService.setCompanies(data);

      }, (error) => { })
    }, (error) => {
      this.toastr.success(error.message);

    })

  }


  pagination(type: any) {

    this.sharedService.setToggleSpinner(true);


    // if (type == 'next') {
    //   this.companies.links.next && this.companyService.getCompaniesPagination(this.companies?.links?.next).subscribe((data: any) => {
    //     this.companyService.setCompanies(data);
    //     this.sharedService.setToggleSpinner(false);

    //   })
    // } else {
    //   this.companies.links.prev && this.companyService.getCompaniesPagination(this.companies?.links?.prev).subscribe((data: any) => {
    //     this.companyService.setCompanies(data);
    //     this.sharedService.setToggleSpinner(false);

    //   })
    // }
    this.sharedService.setToggleSpinner(true);
    if (type == 'next' && this.companies?.meta?.current_page < this.companies?.meta?.last_page) {
      this.companyService.getCompaniesPagination(this.companies?.meta?.current_page + 1).subscribe((data:any) => {
        this.sharedService.setToggleSpinner(false);
        console.log(data);

        this.companies = data;
      });

    }
    if (type == 'prev' && this.companies?.meta?.current_page > 1) {
      this.sharedService.setToggleSpinner(false);
      this.companyService.getCompaniesPagination(this.companies?.meta?.current_page - 1).subscribe((data:any) => {
        this.sharedService.setToggleSpinner(false);
        console.log(data);

        this.companies = data;
      })
    }


  }

  @ViewChild('closeModal') closeModal: ElementRef | undefined
  ngOnInit(): void {
    this.companyService.getCompaniesFromServer().subscribe(
      (data: any) => {
        this.companies = data

        this.companyService.setCompanies(data);
      }, (error) => {
        this.errorListCompanies = error;
      });
      this.companyService.getCompanies().subscribe((data) => { this.companies = data })

    this.tenantsService.getTenants().subscribe((data) => {
      this.tenants = data;
      this.response = false;

    }, (error) => {
      this.response = false;

      this.errorListTenants = error
    })
  }
}
