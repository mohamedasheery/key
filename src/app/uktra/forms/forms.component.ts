import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/services/shared.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
     this.sharedService.setTitlle('Forms');
  }
}
