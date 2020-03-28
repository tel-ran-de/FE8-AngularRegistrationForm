import {Directive, ElementRef} from '@angular/core';
import {TranslationsService} from "../services/translations.service";

@Directive({
  selector: '[appTrans]'
})
export class TransDirective {

  private key: string;

  constructor(private element: ElementRef, private translationsService: TranslationsService) {}

  ngAfterViewInit() {
    console.log(this.element);
    this.key = this.element.nativeElement.innerText;
    this.setTranslation();
    this.translationsService.languageChangeEventEmitter.subscribe(lang => {
      this.setTranslation();
    })
  }

  setTranslation() {
    this.element.nativeElement.innerText = this.translationsService.getTranslation(this.key);
  }

}
