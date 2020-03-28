import { Injectable } from '@angular/core';
import { RegistrationDataModel } from "../../model/RegistrationDataModel";

@Injectable({
  providedIn: 'root'
})
export class PrintToConsoleService {

  constructor() { }

  print(value: any) {
    console.log(value);
  }

  printRegistrationForm(value: RegistrationDataModel) {
    console.log(value);
  }
}
