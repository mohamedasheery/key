import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  title = 'key';

  ngOnInit(): void {
   sessionStorage.setItem("Token",'7|tdI3QReD5baCTVfIlhguE4X9PXI35srlL4Ft1SSq')

  }

}
