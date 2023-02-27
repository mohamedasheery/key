import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
;

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
constructor(private sharedService:SharedService){}

ngOnInit(): void {
   this.sharedService.setTitlle('Roles');
}
}
