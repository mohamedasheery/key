import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor() {
    // this.selectedLanguage = 'ar'
    
    if (!localStorage.getItem("selectedLanguage"))
      localStorage.setItem("selectedLanguage", 'en')
  }

  selectedLanguage: string='';
  setSelctedLanguage(lang: string) {
    if (lang != localStorage.getItem("selectedLanguage"))
      localStorage.setItem("selectedLanguage", lang)
    this.selectedLanguage = lang
  }
  
  getSelectedLanguage() {
    if (localStorage.getItem("selectedLanguage")) { return localStorage.getItem("selectedLanguage") }
    else { return this.selectedLanguage }
  }
}
