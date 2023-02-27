import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private sharedService:SharedService,
  private languageService:LanguageService,
   private translateServices: TranslateService){}
title:string='';
items= [];
Menu: boolean = false;
langModel: any;
selectedCityCode: string = "";
Language=localStorage.getItem("selectedLanguage");

ngOnInit() {
  this.sharedService.geTtitlle().subscribe((data:string)=>{this.title = data})

  if (this.languageService.getSelectedLanguage()) {
    if (this.languageService.getSelectedLanguage() == "ar") {
      this.langModel = { name: 'العربية', code: 'ar', flag: "../../../assets/img/eg.png"}
    }
    else {
      this.langModel = { name: 'English', code: 'en', flag: "../../../assets/img/en.svg"}
    }

    this.swithcPagesDirection(this.langModel.code);
    this.translateServices.use(this.langModel.code);
  }
}

refreshPage(): void {
  window.location.reload();
}

switchLang(lang: any) {
  this.languageService.setSelctedLanguage(lang);
  this.swithcPagesDirection(lang);
  this.translateServices.use(lang);
 this.refreshPage();
}

toggle() {
  this.Menu = !this.Menu
}
lang: any;

swithcPagesDirection(lang: any) {
  if (
    lang != 'ar' &&
    document.getElementsByTagName('html')[0].hasAttribute('dir')
  )
   {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
  } 
  else if (
    lang == 'ar' &&
    document.getElementsByTagName('html')[0].hasAttribute('dir')
  ) {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
   
  }
}

}
