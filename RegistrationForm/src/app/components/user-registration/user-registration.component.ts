import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder,
              private printToConsoleService: PrintToConsoleService,
              private translationsService: TranslationsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myReactiveForm = this.fb.group({
      userName: ['', [Validators.required,
        AppValidators.notVasya,
        AppValidators.notName('petya')]
      ],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.myReactiveForm.controls[controlName];

    const result = control.invalid && control.touched;

    return result;
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
}
