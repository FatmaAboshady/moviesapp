import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    CarouselModule,
    ButtonModule
  ],
  exports: [MoviesComponent],
})
export class MoviesModule { }
