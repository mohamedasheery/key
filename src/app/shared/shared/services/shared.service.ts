import { BehaviorSubject, Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  titlle = new BehaviorSubject('Dashbord');
  spinner = new BehaviorSubject(false);
  geTtitlle(): Observable<any> {
    return this.titlle
  }

  setTitlle(title: any) {
    return this.titlle.next(title)
  }
  geTSpinner(): Observable<any> {
    return this.spinner
  }

  setToggleSpinner(val: any) {
    return this.spinner.next(val)
  }
}
