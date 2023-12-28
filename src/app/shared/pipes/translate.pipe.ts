// translate.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false // Set to false to enable dynamic updates
})
export class TranslatePipe implements PipeTransform {
  constructor(private translationService: TranslationService) {}

  transform(key: string): string {
    const translations = this.translationService.getTranslationsSync();
    const keys = key.split('.');

    const keyToCatch = keys.reduce((acc, currentKey) => {
      return acc ? acc[currentKey] : '';
    }, translations);

    return translations ? keyToCatch : key;
  }
}
