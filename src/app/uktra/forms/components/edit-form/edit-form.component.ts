import { Component } from '@angular/core';
import { TypeFieldDataService } from 'src/app/uktra/fields/services/type-field-data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  constructor(private typeFieldDataService:TypeFieldDataService){}
typeFields:any;

  ngOnInit(): void {
 this.typeFieldDataService.getTypefieldData().subscribe((data:any)=>{
  console.log(data);
  this.typeFields = data;
 })
    
  }
}
