import { RolesService } from '../../services/roles.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared/shared/services/shared.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-table.component.html',
  styleUrls: ['./role-table.component.scss']
})
export class RoleTableComponent {
  constructor(private rolesService: RolesService,
    private sharedService: SharedService,
    private toastr: ToastrService) { }
  errorListRoles: any;
  roles: any = {
    data: [],
    meta: { current_page: '' }
  };
  response: boolean = true;
  current_page: number = 0
  deletRole(id: any) {
    this.rolesService.deleteRole(id).subscribe((data: any) => {
      this.toastr.success(data.message);
      this.rolesService.getRolesFromServer().subscribe((data) => {
        this.rolesService.setLastUpdatedRoles(data)
      })
    }, (error: any) => {
      console.log(error);

      this.toastr.error(error.message);
    })
  }


  ngOnInit(): void {
    this.rolesService.getRolesFromServer().subscribe((data) => {

      this.rolesService.setLastUpdatedRoles(data);
      this.response = false;
    }, (error) => {
      this.response = false;

      this.errorListRoles = error;
    })
    this.rolesService.getLastUpdatedRoles().subscribe((data) => {

      this.roles = data
    });
  }
  pagination(type: any) {

    this.sharedService.setToggleSpinner(true);
    if (type == 'next' && this.roles?.meta?.current_page < this.roles?.meta?.last_page) {
      this.rolesService.getRolesFromServerPagination(this.roles?.meta?.current_page + 1).subscribe((data:any) => {
        this.sharedService.setToggleSpinner(false);
        this.roles = data;
      });

    }
    if (type == 'prev' && this.roles?.meta?.current_page > 1) {
      this.sharedService.setToggleSpinner(false);
      this.rolesService.getRolesFromServerPagination(this.roles?.meta?.current_page - 1).subscribe((data:any) => {
        this.sharedService.setToggleSpinner(false);
        this.roles = data;
      })
    }



  }


}
