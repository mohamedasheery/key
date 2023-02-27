import { singleRole } from './../../interfaces/singleRole';
import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/shared/roles/services/roles.service';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent {
  constructor(private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private rolesService: RolesService,
    private formBuilder: FormBuilder) { }
  activeId: any;
  Permissions: any = [];
  selectedPermissions: any = [];
  desplayPermission: boolean = false;
  errorsAddRole: any;
  role: any ;
  spinner: boolean = true;



  updateRole = this.formBuilder.group({
    roleName: ['', [Validators.required, Validators.pattern('^([A_Za-z]{3,})+ ?([A_Za-z]{3,})*$')]],

  });

  get roleName() {
    return this.updateRole.get('roleName')
  }
  showPermission(ele: any) {
    if (ele.classList.contains('d-none')) {


      ele.classList.remove('d-none');
    } else {
      console.log('add');
      ele.classList.add('d-none');
    }
  }

  selectSinglePermission(permission: any) {


    if (this.selectedPermissions.includes(permission.id)) {
      this.selectedPermissions = this.selectedPermissions.filter((item: any) => item != permission.id);
      permission.checked != permission.checked;
    } else {
      this.selectedPermissions.push(permission.id);
      permission.checked != permission.checked;

    }
    console.log(this.selectedPermissions);




  }
  fillFormToUpdateRole() {

    console.log(this.role.data.name);

    this.updateRole.patchValue({
      roleName: this.role.data.name,
    });
    this.selectedPermissions =
    this.role.data.permissions.map((permission: any): any => permission.id)
  }
  updatedRole() {
    this.spinner = false;
    let updetedRole = {
      name: this.roleName?.value,
      permissions: this.selectedPermissions
    }
    this.rolesService.updateRole(this.role.data.id, updetedRole).subscribe((data: any) => {
      this.spinner = true;

      this.toastr.success(data.message);

      this.clearForm()

      this.rolesService.getRolesFromServer().subscribe((data: any) => {
        this.rolesService.setLastUpdatedRoles(data)
      })

    }, (error) => {

      this.errorsAddRole = error;
      this.toastr.error(error.message);
      this.spinner = true;


    })


  }

  selectPermission(ele: any, Category: any) {

    if (ele.target.checked == true) {
      Category.permissions.map((permission: any) => {
        if (this.selectedPermissions.includes(permission.id) == false) {
          this.selectedPermissions.push(permission.id);
          permission.checked = true;
        }
      });
    } else {
      Category.permissions.map((permission: any) => {
        permission.checked = false;
        if (this.selectedPermissions.includes(permission.id)) {
          this.selectedPermissions = this.selectedPermissions.filter((id: any) => id != permission.id);
        }
      });
    }

    console.log(this.selectedPermissions);
  }

  clearForm() {
    this.updateRole.patchValue({
      roleName: '',
    });
    this.updateRole.reset()
    this.selectedPermissions = [];
    this.router.navigateByUrl('roles')
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params);

      this.activeId = params;
      console.log(this.activeId.params.id);

      this.rolesService.getRole(this.activeId.params.id).subscribe((data: singleRole) => {

        this.role = data;
        this.fillFormToUpdateRole();


      }, (error) => {

        this.errorsAddRole = error;
      })
    });

    this.rolesService.getPermission().subscribe((data: any) => {
      this.Permissions = data;



    })


  }
}
