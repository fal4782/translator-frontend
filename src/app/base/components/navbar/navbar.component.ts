import { Component } from '@angular/core';
import { TranslationService } from 'src/app/shared/services/translation.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  isCollapsed = true;
  translations: any;
  constructor(private translationService: TranslationService){}

  ngOnInit(){
    this.translationService.changeLanguage('en');
  }

  changeLanguage(language: string): void {
    this.translationService.changeLanguage(language);
  }
 
}
