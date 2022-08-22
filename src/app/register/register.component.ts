import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CustomvalidationService } from '../services/customvalidation.service';
// import custom validator to validate that password and confirm password fields match
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 error:string=''
  profileForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],

    



    
  },
  {
    validator: this.customValidator.passwordMatchValidator('password', 'confirmPassword'),
  });

  constructor(private fb: FormBuilder ,    private customValidator: CustomvalidationService, private _authservice:AuthService , private _router:Router) { }
ngOnInit() {

}
clear(){
  this.profileForm.reset()
}
onSubmit(){
  console.log('hello');
  
  this._authservice.register(this.profileForm.value).subscribe((responce)=>{
    console.log(responce);
    
    if(responce.message=='success'){
      console.log(responce.message);
      
      this._router.navigate(['/login'])


    }else{
      this.error= responce.errors.email.message
      console.log(responce.errors.email.message);
      

    }
  },
  )
  console.log(this.profileForm.value);
  
}
  
}


