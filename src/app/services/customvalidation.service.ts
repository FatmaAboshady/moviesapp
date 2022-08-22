import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
  patternValidator(): ValidatorFn | null | undefined {
    throw new Error('Method not implemented.');
  }

  private isLogin = false;

  constructor( private http:HttpClient) {
    

  }
  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }
  

// validateUsernameNotTaken(control: AbstractControl) {
//   return this.checkUsernameNotTaken(control.value).pipe(
//     map(res => {
//       return res ? null : { usernameTaken: true };
//     })
//   );
// }

//Fake API call -- You can have this in another service
// checkUsernameNotTaken(username: string) {
//   return this.http.get("assets/fakedb.json").pipe(
//     map((usernameList: Array<any>) =>
//       usernameList.filter(user => user.username === username)
//     ),
//     map(users => !users.length)
//   );
// }

 

}
