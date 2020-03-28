import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";

const translations = {
  ru: {
    'dummy works!': 'Просто компонет работает',
    minlength: 'Минимальная длина 8 символов',
    email: 'Некорректный адрес электронной почты',
    required: 'Поле не может быть пустым',
    notvasya: "Имя не может быть Вася",
    user_registration_form: 'Форма регистрации нового пользователя',
    en: 'англ.',
    ru: 'рус.'
  },
  en: {
    'dummy works!': 'Dummy componet works',
    minlength: 'Min length must be 8 symbols',
    email: 'Incorrect email address',
    required: 'Field can not be empty',
    notvasya: "Vasya is not allowed",
    user_registration_form: 'User registration form',
    ru: 'rus',
    en: 'eng'
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  private currentLanguage: string = 'ru';

  languageChangeEventEmitter = new EventEmitter<string>();

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang;
    this.languageChangeEventEmitter.emit(lang);
    console.log(this.currentLanguage)
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getTranslation(key: string) {
    return translations[this.currentLanguage][key];
  }
}
