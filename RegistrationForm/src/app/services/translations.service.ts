import { Injectable } from '@angular/core';

const translations = {
  ru: {
    minlength: 'Минимальная длина 8 символов',
    email: 'Некорректный адрес электронной почты',
    required: 'Поле не может быть пустым',
    notvasya: "Имя не может быть Вася",
    user_registration_form: 'Форма регистрации нового пользователя'
  },
  en: {
    minlength: 'Min length must be 8 symbols',
    email: 'Incorrect email address',
    required: 'Field can not be empty',
    notvasya: "Vasya is not allowed",
    user_registration_form: 'User registration form'
  }
};

@Injectable({
  providedIn: 'root'
})
export class TranslationsService {

  private currentLanguage = 'ru';

  constructor() { }

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang;
    console.log(this.currentLanguage);
  }

  getTranslation(key: string) {
    return translations[this.currentLanguage][key];
  }
}
