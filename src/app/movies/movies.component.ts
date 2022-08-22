import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  trendingMovies:any[]=[];
  overview:any={}
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
  imgPrefix:string='https://image.tmdb.org/t/p/w500/'
  constructor( private _movieService:MoviesService ){
    _movieService.getTrending('movie').subscribe((data)=>{
      this.trendingMovies=data.results
      console.log(data.overview)

      console.log(this.overview)
      console.log(this.trendingMovies);
      
       
    });
  }
  ngOnInit(): void {
  }

}
