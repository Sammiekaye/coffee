
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace: any;
cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
    if((control.value as string).indexOf('') >=0)
        return { cannotContainSpace: true };
    else return null; }
}

