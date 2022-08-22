import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';
ActivatedRoute
@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
id:string=''
movie:any={}
imgPrefix:string='https://image.tmdb.org/t/p/w500/'

  constructor( private _activatedrour:ActivatedRoute ,private _MoviesService :MoviesService) {
 this.id=   _activatedrour.snapshot.params['id']
 _MoviesService.getMovieDetails(this.id).subscribe((data)=>{
  this.movie=data
  console.log(data);
   

 })
   }

  ngOnInit(): void {
  }

}
