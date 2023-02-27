import { Component } from '@angular/core';

@Component({
  selector: 'app-view-field',
  templateUrl: './view-field.component.html',
  styleUrls: ['./view-field.component.scss']
})
export class ViewFieldComponent {
constructor(){}
numberField:number=0;
changeNumberField(type:any){
   if(type == 'increment'){
    this.numberField+=1
   }else{
    this.numberField-=1

   }
}
}
