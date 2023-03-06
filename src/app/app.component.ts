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
   sessionStorage.setItem("Token",'9|rnEPnHOxNS121nPYaZ692PFHFgpfekjMjidQn6u1')

  }

}
