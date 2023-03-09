import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { FormsService } from './../../services/forms.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
constructor(private formsService:FormsService,
  private router:Router,
  private sharedService:SharedService ){}
forms:any=[];

navToEditForm(id:any){
console.log(id);

}
ngOnInit(): void {
  this.sharedService.setToggleSpinner(true);
 this.formsService.getFormsFromApi().subscribe((data:any)=>{
  this.sharedService.setToggleSpinner(false);
  this.forms = data;
 },(error:any)=>{
  this.sharedService.setToggleSpinner(false);
  console.log(error);
 })

}
}
