import { Component, OnInit } from '@angular/core';
import {TranslationsService} from "../../services/translations.service";

@Component({
  selector: 'app-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {

  constructor(private translationsService: TranslationsService) { }

  ngOnInit(): void {
  }

  setLang(lang: string) {
    this.translationsService.setCurrentLanguage(lang);
  }
}
