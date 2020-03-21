import { Injectable } from '@angular/core';
import { RegistrationDateModel } from "../../model/RegistrationDataModel";

@Injectable({
  providedIn: 'root'
})
export class PrintToConsoleService {

  constructor() { }

  print(value: any) {
    console.log(value);
  }

  printRegistrationForm(value: RegistrationDateModel) {
    console.log(value);
  }
}
