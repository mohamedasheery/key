import { CompanyService } from '../../services/company.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TenantsService } from 'src/app/uktra/tenants/services/tenants.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {
  constructor(private formBuilder: FormBuilder,
     private companyService: CompanyService,
     private tenantsService:TenantsService,
     private router: Router,
      private toastr: ToastrService) { }
  tenants:any=
  {
    data:[]
  }
  errorListTenants:any;
  ICompany: any = {
    name: '',
    status: '',
    tenant_id:'',
  };
  spinner:boolean=true;

  addNewCompany = this.formBuilder.group({
    companyName: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3,})+ ?([A-Za-z]{3,})*$')]],
    companyStatus: ['', [Validators.required]],
    AssignedTenant: ['', [Validators.required]],
  });

  get companyName() {
    return this.addNewCompany.get('companyName')
  }

  get companyStatus() {
    return this.addNewCompany.get('companyStatus')
  }
  get AssignedTenant() {
    return this.addNewCompany.get('AssignedTenant')
  }

  getNewCompany(){
    this.spinner=false;

    this.ICompany.name = this.companyName?.value;
    this.ICompany.status = this.companyStatus?.value;
    this.ICompany.tenant_id = this.AssignedTenant?.value;
    console.log(this.ICompany);
    this.companyService.addCompany(this.ICompany).subscribe((data:any)=>{
  
      this.toastr.success(data.message);
      this.spinner=true;
      this.closeModal?.nativeElement.click();
      this.companyService.getCompaniesFromServer().subscribe((data:any)=>{
        this.companyService.setCompanies(data)
      })
    },(error)=>{
      this.spinner=true;

      this.toastr.error(error.message)
     
    })
  }

  @ViewChild('closeModal') closeModal: ElementRef | undefined
  ngOnInit(): void {
  
    this.tenantsService.getTenants().subscribe((data)=>{
  this.tenants = data;
      console.log(this.tenants.data);
    },(error)=>{this.errorListTenants = error})
    
  }


}
