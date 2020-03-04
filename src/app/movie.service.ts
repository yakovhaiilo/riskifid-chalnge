import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Movie, MovieDetail } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly API_KEY = `3ea150464035bc92e08e1ecfd93b9557`;

  constructor(private http: HttpClient) { }

  searchMovie(searchQuery: string): Observable<Array<Movie>> {
    // console.log(searchQuery)
      return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${searchQuery}`)
      .pipe(
        map((response: any) => response.results)
      );
    
  }
  
  getMovieDetails(movieId:string){

    //  console.log(movieId)
    return this.http.get(`https://api.themoviedb.org/3/movie/?api_key=${this.API_KEY}&query=${movieId}`);
  }
  

}
