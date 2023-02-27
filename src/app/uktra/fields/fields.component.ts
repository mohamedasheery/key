import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared/shared/services/shared.service';


@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent {
  constructor(private sharedService:SharedService){}

  ngOnInit(): void {
     this.sharedService.setTitlle('Fields');
  }
}
