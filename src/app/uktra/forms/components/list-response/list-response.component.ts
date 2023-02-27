import { Component } from '@angular/core';

@Component({
  selector: 'app-list-response',
  templateUrl: './list-response.component.html',
  styleUrls: ['./list-response.component.scss']
})
export class ListResponseComponent {
constructor(){}
pagination(type:string){
  console.log(type);
  
}
}
