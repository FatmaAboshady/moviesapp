import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenubarModule } from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';

import { HttpClientModule } from "@angular/common/http";
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { LoginModule } from './login/login.module';
import { MoviesModule } from './movies/movies.module';
import { FooterComponent } from './footer/footer.component';
import { TvModule } from './tv/tv.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    HomeheaderComponent,
    MoviedetailsComponent,
    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    MenubarModule,
    ButtonModule,
    BrowserAnimationsModule,
   
    LoginModule   ,
    MoviesModule,
    TvModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
