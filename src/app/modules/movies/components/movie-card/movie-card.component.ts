import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie!: Movie
  @Output() deleteMovieEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  deleteMovie():void{
    this.deleteMovieEvent.emit(this.movie.id)
  }

}
