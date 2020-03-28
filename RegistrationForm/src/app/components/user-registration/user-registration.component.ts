import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { PrintToConsoleService } from "../../services/print-to-console/print-to-console.service";
import { AppValidators } from "../../validators/app-validators";
import {TranslationsService} from "../../services/translations.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  myReactiveForm: FormGroup;
  weakPasswordText = "Слабый пароль";
  lang: string;

  constructor(private fb: FormBuilder,
              private printToConsoleService: PrintToConsoleService,
              private translationsService: TranslationsService) { }

  ngOnInit(): void {
    this.lang = this.translationsService.getCurrentLanguage();
    this.translationsService.languageChangeEventEmitter.subscribe(lang => {
      this.lang = lang;
    });
    this.initForm();
  }

  initForm() {
    this.myReactiveForm = this.fb.group({
      userName: ['', [Validators.required, AppValidators.notVasya, AppValidators.notName('petya')]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  getControl(controlName: string): AbstractControl {
    return this.myReactiveForm.get(controlName);
  }

  onSubmit() {
    const controls = this.myReactiveForm.controls;

    if (this.myReactiveForm.invalid) {
      Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    this.printToConsoleService.printRegistrationForm(this.myReactiveForm.value);
  }

  getTranslation(key: string) {
    return this.translationsService.getTranslation(key);
  }

  toggle($event) {
    console.log($event);
    if (this.getControl('userName').disabled) {
      this.getControl('userName').enable();
    } else
      this.getControl('userName').disable();
  }
}
