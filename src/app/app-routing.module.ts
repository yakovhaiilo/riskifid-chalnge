import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import {SearchHistoryComponent } from "./search-history/search-history.component";


const routes: Routes = [ 
  { path: "", component: MovieSearchComponent },
  { path: "history", component: SearchHistoryComponent },
  { path: 'movie/:movieId', component: MovieDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
