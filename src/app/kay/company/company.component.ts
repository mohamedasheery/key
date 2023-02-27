import { CompanyService } from './services/company.service';
import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/services/shared.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private sharedService:SharedService, private companyService:CompanyService){}
message:any;

companies:any;
  ngOnInit(): void {
     this.sharedService.setTitlle('Company');
     this.companyService.getCompaniesFromServer().subscribe((data:any)=>{
      this.companyService.setCompanies(data);
      if(data.data.length == 0 ){
        this.message = 'not found any company,add new'; 
      }
      console.log(data);
     })
  }
}
