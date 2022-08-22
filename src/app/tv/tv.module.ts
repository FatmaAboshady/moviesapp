import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvComponent } from './tv.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { MoviesComponent } from '../movies/movies.component';


@NgModule({
  declarations: [
    TvComponent
  ],
  imports: [
    CommonModule,
    TvRoutingModule,
    CarouselModule,
    ButtonModule
  ],
    exports: [TvComponent],

})
export class TvModule { }
