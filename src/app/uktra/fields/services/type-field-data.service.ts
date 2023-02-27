import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeFieldDataService {

  constructor() { }

  typefieldData=new BehaviorSubject([
    {type:'Text',text:'Text',src:'assets\\icon-field/text.png'},
    {type:'Checkbox',text:'Checkbox',src:'assets\\icon-field/square-check.png'},
    {type:'Radio Button',text:'Radio Button',src:'assets\\icon-field/Radio-Button.png'},
    {type:'File Upload',text:'File Upload',src:'assets\\icon-field/folder-arrow-up.png'},
    {type:'Rating',text:'Rating',src:'assets\\icon-field/star.png'},
    {type:'Dropdown',text:'Dropdown',src:'assets\\icon-field/square-chevron-down.png'},
    {type:'TextArea',text:'Text area',src:'assets\\icon-field/align-left.png'},
    {type:'Toggle Switch',text:'Toggle Switch',src:'assets\\icon-field/toggle-on.png'},
    {type:'Time Picker',text:'Time Picker',src:'assets\\icon-field/clock.png'},
    {type:'Image',text:'Image',src:'assets\\icon-field/Image.png'},
    {type:'Label',text:'Label',src:'assets\\icon-field/tags.png'},
    {type:'Number',text:'Number Field',src:'assets\\icon-field/arrow-up-arrow-down.png'},
  ]);
  selectedField = new BehaviorSubject({type:'Text',text:'Text',src:'assets\\icon-field/text.png'});
  setSelectedField(type:any){
  this.selectedField.next(type)
}
getSelectedField(): Observable<any>{
  return this.selectedField
}
  getTypefieldData(): Observable<any>{
    return this.typefieldData
  }

}
