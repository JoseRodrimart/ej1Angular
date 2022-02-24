import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie/movie.service';
import { Movie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie> = []

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  private getMovies(){
    this.movieService
      .getMovies()
      .subscribe(
        movies=>this.movies = movies,
        error=>alert(error));
  }

  deleteMovie(id: number) {
    this.movieService
      .deleteMovie(id)
      .subscribe(
        ()=>this.getMovies()
      );
  }
}
