import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";
import { AuthService } from '../services/auth.service';
import { CustomvalidationService } from '../services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error =''

  profileForm = this.fb.group({
    firstName: ['', [Validators.required , Validators.minLength(3) , Validators.maxLength]],
    lastName: ['', Validators.required],
    email: ['',  [Validators.required , Validators.email , Validators.minLength(3)]],
    password: ['', Validators.required],
    
    confirmPassword: ['', Validators.required],
    
    



    
  },
  {
    validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword'),
  });

  constructor(private fb: FormBuilder , private _router:Router,    private customValidator: CustomvalidationService, private _AuthSrevice : AuthService) { }
ngOnInit() {

}
clear(){
  this.profileForm.reset()
}
onSubmit(profileForm: FormGroup){
  this._AuthSrevice.login(profileForm.value).subscribe((response)=>{
    if(response.message =='success'){
      localStorage.setItem('userId', response.token)
      this._router.navigate(['/home'])
    } else{
      this.error = response.message;
    }
  })
  console.log(profileForm);
  

  console.log(this.profileForm.value);
  
}
  
 

}
