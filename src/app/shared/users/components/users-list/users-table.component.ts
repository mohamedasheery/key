import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/shared/users/services/users.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RolesService } from 'src/app/shared/roles/services/roles.service';
import { singleUser } from '../../interfaces/singleUser';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  constructor(private usersService: UsersService,
    private toastr: ToastrService,
    private sharedService: SharedService,
    private rolesService: RolesService,
    private formBuilder: FormBuilder,) { }
  roles: any = {
    data: []
  }
  users: any = {
    data: [],
    meta: { current_page: '' }
  };
  response: boolean = true;

  listUsersError: any;
  updateErrors: any;
  deleteErrors: any;
  message: string = 'no users found plz add new ';
  spinner: boolean = true;
  userUpdeted: any = {
    name: '',
    email: '',
    phone: '',
    status: '',
    role_id: '',
    parent_id: '',
  }
  updateUserDate: singleUser = {
    data: {
      id: '',
      name: '',
      email: '',
      phone: '',
      status: '',
      parent: '',
      role: '',
      role_id: '',
      parent_id: '',
    }

  };


  updateUser = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3,})+ ?([A-Za-z]{3,})*$')]],
    userEmail: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$')]],
    userStatus: ['', [Validators.required]],
    userPhone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    userParent: [''],
    userRole: ['', [Validators.required]],
  });

  get userName() {
    return this.updateUser.get('userName');
  }
  get userEmail() {
    return this.updateUser.get('userEmail');
  } get userStatus() {
    return this.updateUser.get('userStatus');
  } get userPhone() {
    return this.updateUser.get('userPhone');
  } get userParent() {
    return this.updateUser.get('userParent');
  } get userRole() {
    return this.updateUser.get('userRole');
  }


  // fill form
  getDataUserToUpdata(id: any) {

    this.usersService.getSingleUser(id).subscribe((data: any) => {
      console.log(data);

      this.updateUserDate = data,
        this.updateUser.patchValue({
          userName: this.updateUserDate.data.name,
          userEmail: this.updateUserDate.data.email,
          userStatus: this.updateUserDate.data.status,
          userPhone: this.updateUserDate.data.phone,
          userRole: this.updateUserDate.data.role_id,
          userParent: this.updateUserDate.data.parent_id,
        })

    })

  }
  updataUser() {
    this.spinner = false;

    this.userUpdeted.name = this.userName?.value;
    this.userUpdeted.email = this.userEmail?.value;
    this.userUpdeted.phone = this.userPhone?.value;
    this.userUpdeted.status = this.userStatus?.value;
    this.userUpdeted.parent_id = this.userParent?.value;
    this.userUpdeted.role_id = this.userRole?.value;


    console.log(this.userUpdeted);


    this.usersService.updateUser(this.userUpdeted, this.updateUserDate.data.id).subscribe(
      (data: any) => {
        this.spinner = true;
        this.toastr.success(data.message);
        this.closeModal?.nativeElement.click();
        this.updateErrors = null;

        this.usersService.getUsers().subscribe((data) => {
          this.usersService.setLastUsers(data);
          this.usersService.getLastUsers().subscribe((data: any) => {
            this.users = data
          })
        });
      }, (error) => {
        this.toastr.error('Error');
        console.log(error);

        this.updateErrors = error;
        this.spinner = true;

      })
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe((data: any) => {
      this.toastr.success(data.message);
      this.usersService.getUsers().subscribe((data) => { this.users = data }, (error) => { });
    }, (error: any) => {
      this.deleteErrors = error;
      this.toastr.error(error.message);


    })
  }


  pagination(type: any) {

    this.sharedService.setToggleSpinner(true);


    if (type == 'next' && this.users?.meta?.current_page < this.users?.meta?.last_page) {

      this.usersService.getUsersFromPagnation(this.users?.meta?.current_page + 1).subscribe((data) => {
        this.sharedService.setToggleSpinner(false);

        this.users = data
      });

    }
    if (type == 'prev' && this.users?.meta?.current_page > 1) {
      this.usersService.getUsersFromPagnation(this.users?.meta?.current_page - 1).subscribe((data) => {
        this.sharedService.setToggleSpinner(false);

        this.users = data
      })
    }


  }

  @ViewChild('closeModal') closeModal: ElementRef | undefined
  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data) => {
      this.usersService.setLastUsers(data);
      this.response = false;
      console.log(data);

    }, (error) => {
      this.response = false;

      this.listUsersError = error;
    });

    this.usersService.getLastUsers().subscribe((data) => {


      this.users = data
    });
    this.rolesService.getRolesFromServer().subscribe((data: any) => {
      this.roles = data;
    })
  }
}
