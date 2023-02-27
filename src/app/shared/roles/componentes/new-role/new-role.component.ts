import { IRole } from './../../interfaces/createRole';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { RolesService } from 'src/app/shared/roles/services/roles.service';

import {
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent {
  constructor(private rolesService: RolesService,
    private router:Router,
     private formBuilder: FormBuilder
     ,private toastr: ToastrService) { }
  Permissions: any = [];
  selectedPermissions: any = [];
  desplayPermission: boolean = false;
  errorsAddRole: any;
  spinner:boolean=true;

  createRole = this.formBuilder.group({
     name: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3,})+ ?([A-Za-z]{3,})*$')]],
     permissions:[this.selectedPermissions]
  });

  get roleName() {
    return this.createRole.get('name')
  }

  showPermission(ele: any) {
    if (ele.classList.contains('d-none')) {


      ele.classList.remove('d-none');
    } else {
     
      ele.classList.add('d-none');
    }
  }

  selectPermissin(permissin: any) {
    if (this.selectedPermissions.includes(permissin.id)) {
      this.selectedPermissions = this.selectedPermissions.filter((item: any) => item != permissin.id)
    } else {
      this.selectedPermissions.push(permissin.id);
    }


  }

  addrole() {
    this.spinner  = false;
    // let NewRole = {
    //   name: this.roleName?.value,
    //   permissions: this.selectedPermissions
    // }
     let NewRole:IRole=  this.createRole.value as IRole;
     
    

    this.rolesService.addRole(NewRole).subscribe((data:any) => {
      this.toastr.success(data.message);
      this.errorsAddRole =null;
      this.spinner  = true;
      this.router.navigateByUrl('roles');
      this.rolesService.getRolesFromServer().subscribe((data) => {
       
        this.rolesService.setLastUpdatedRoles(data)
      })

    }, (error:any) => {
      this.toastr.error(error.message)
   
      this.errorsAddRole = error;
      this.spinner  = true;
     
    })

  }

  selectChildernPermission(ele: any, Category: any) {

    if (ele.target.checked == true) {
      Category.permissions.map((permission: any) => {
        if (this.selectedPermissions.includes(permission.id) == false) {
          this.selectedPermissions.push(permission.id);
          permission.checked = true;
        } });
    } else {
      Category.permissions.map((permission: any) => {
        permission.checked = false;
        if (this.selectedPermissions.includes(permission.id)){

          this.selectedPermissions = this.selectedPermissions.filter((item: any) => { item != permission.id  })
        }

      });
    }

    console.log(this.selectedPermissions);
  }

  ngOnInit(): void {

    this.rolesService.getPermission().subscribe((data:any) => {
      this.rolesService.setlastUpdatedPermissions(data)
    });
    this.rolesService.getlastUpdatedPermissions().subscribe((data:any) => {

      this.Permissions = data;
     

    })

  }
}
