import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from "primeng/button";
import {ToastModule} from 'primeng/toast';
import {Message,MessageService} from "primeng/api";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule, CardModule, ButtonModule, FormsModule,ToastModule, ReactiveFormsModule,
  ],providers:[MessageService]  
})
export class LoginModule { 
   
}



