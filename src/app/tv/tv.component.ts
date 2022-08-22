import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  trendingTv:any=[];
  overview:any={}
   
  imgPrefix:string='https://image.tmdb.org/t/p/w500/'
  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor( private _movieService:MoviesService , ){

    _movieService.getTrending('tv').subscribe((data)=>{
      this.trendingTv=data.results
      console.log(this.trendingTv);
      
  
    });
  
  }
  ngOnInit(): void {
  }

}
