import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { RouteReuseStrategy } from '@angular/router';



@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  
  movies :object;
  query: string;
  imgUrl : string = 'https://image.tmdb.org/t/p/w500'

  constructor(private readonly movieService: MovieService) {}

  ngOnInit() {
  
  }
  getSearchResults() {
    this.movieService.searchMovie(this.query).subscribe(data => {
       this.movies = data
       console.log(this.movies)
    });
     
  }

  getMovieId(movieId){
    Route.navigate
  }

}







