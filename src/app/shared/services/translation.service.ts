// translation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private apiUrl = 'http://localhost:3000/translations';
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable(); //ASK
  private translations: any; // Store translations locally

  constructor(private http: HttpClient) {}

  getTranslations(language?: string): Observable<any> {
    const selectedLanguage = language || this.currentLanguageSubject.value;  //ASK ABOUT .value
    const url = `${this.apiUrl}/${selectedLanguage.toLowerCase()}`;
    console.log(this.http);
    
    return this.http.get(url);
  }

  getTranslationsSync(): any {
    return this.translations;
  }

  changeLanguage(language: string): void {
    this.currentLanguageSubject.next(language); //ASK ABOUT how .next works
    this.updateTranslations();
  }

  private updateTranslations(): void {
    this.getTranslations().subscribe({
      next:(translations) => {
        this.translations = translations;        
      },
      error:(error) => {
        console.error('Error fetching translations', error);
      }
  });
  }
}
