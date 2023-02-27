import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/services/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
     this.sharedService.setTitlle('Dashbord');
  }
}
