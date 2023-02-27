import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { TenantsService } from './services/tenants.service';


@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss']
})
export class TenantsComponent {
  constructor(private sharedService:SharedService, private tenantsService:TenantsService){}
  message:any;
  ngOnInit(): void {
     this.sharedService.setTitlle('Tenants');
     this.tenantsService.getTenants().subscribe((data:any)=>{
      if(data.data.length == 0 ){
        this.message = 'not found any company,add new'; 
      }
     }) 
  }
}
