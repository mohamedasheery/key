import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
     this.sharedService.setTitlle('Users');
  }
}
