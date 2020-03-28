import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class AppValidators {

  static notName(name: string): ValidatorFn {
    return function (control: AbstractControl): ValidationErrors | null {
      if (control.value === name) {
        return {'notName': true}
      }
      return null;
    }
  }

  static notVasya(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'Vasya' || control.value === 'vasya') {
      return {'notvasya': true}
    }
    return null;
  }
}
