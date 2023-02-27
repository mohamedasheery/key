import { RolesService } from 'src/app/shared/roles/services/roles.service';
import { Iuser } from './../../interfaces/createUser';
import { ToastrService } from 'ngx-toastr';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-users-header',
  templateUrl: './users-header.component.html',
  styleUrls: ['./users-header.component.scss']
})
export class UsersHeaderComponent {

  constructor(private formBuilder: FormBuilder, 
     private usersService: UsersService,
     private rolesService:RolesService,
      private toastr: ToastrService) { }
  addUserError: any;
  spinner: boolean = true;
  users:any={
    data:[]
  }
  roles:any={
    data:[]
  }

  addNewUser = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^([A-Za-z]{3,})+ ?([A-Za-z]{3,})* ?([A-Za-z]{3,})*$')]],
    email: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9.%-]+@[A-Za-z0-9.%-]+\\.[a-z]{2,3}$')]],
    status: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
    password: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9]{8,}$')]],
    parent_id: [''],
    role_id: ['', [Validators.required]],

  });

  get userName() {
    return this.addNewUser.get('name');
  }
  get userEmail() {
    return this.addNewUser.get('email');
  } get userStatus() {
    return this.addNewUser.get('status');
  } get userPhone() {
    return this.addNewUser.get('phone');
  } get userPassword() {
    return this.addNewUser.get('password');
  } get userParent_id() {
    return this.addNewUser.get('parent_id');
  } get userRole() {
    return this.addNewUser.get('role_id');
  }

  addUser() {
    this.spinner = false;

    // this.newUser.name = this.userName?.value;
    // this.newUser.email = this.userEmail?.value;
    // this.newUser.role = this.userRole?.value;
    // this.newUser.parent_id = this.userParent_id?.value;
    // this.newUser.status = this.userStatus?.value;
    // this.newUser.password = this.userPassword?.value;
    // this.newUser.phone = this.userPhone?.value;


let user:Iuser = this.addNewUser.value as Iuser ;


console.log(user);


    this.usersService.addNewUser(user).subscribe(
      (data) => {
        this.spinner = true;

        this.toastr.success('Add successfully');
        this.closeModal?.nativeElement.click();
        this.addUserError = null;
        this.usersService.getUsers().subscribe((data) => {
          this.usersService.setLastUsers(data)
        })

      }, (error) => {
        this.spinner = true;

        this.addUserError = error;
        console.log(error)
      })

  }

  downloadUsers() {
    this.usersService.downloadUsers().subscribe((data:any) => {
      window.open(data.file_path);
      
    })

  }
  @ViewChild('closeModal') closeModal: ElementRef | undefined;
  ngOnInit(): void {
this.rolesService.getRolesFromServer().subscribe((data:any)=>{
  console.log(data.data);
  
  this.roles = data;
});
this.usersService.getUsers().subscribe((data:any)=>{
 
  
  this.users =data;
})
    
  }

}
