import { SharedService } from 'src/app/shared/shared/services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
constructor(private sharedService:SharedService){}
spinner:boolean=true;
ngOnInit(): void {
 this.sharedService.geTSpinner().subscribe((data:boolean)=>{
  this.spinner = data;
 })

}
}
