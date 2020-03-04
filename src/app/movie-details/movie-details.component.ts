import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

import { ActivatedRoute} from '@angular/router';
import { loadavg } from 'os';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
   
   id: string;
  //  private sub: any;
   movie: object;


  constructor(
       private readonly movieService: MovieService,
       private route : ActivatedRoute
    ) { }

  ngOnInit() {
    console.log(this.route.params);
    
   this.route.params.subscribe(params => {
    this.id = params['id'];;
  });
   console.log(this.id);
   
  this.movieService.getMovieDetails(this.id).subscribe( data=>{
      console.log(data)
  })
 
  }
  
  


}
