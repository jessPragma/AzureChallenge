import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class MoviesComponent {
  movies: any[] = [];
  newMovieTitle: string = '';
  newMovieYear: number | null = null;

  addMovie() {
    const newMovie = {
      id: this.movies.length + 1,
      title: this.newMovieTitle,
      year: this.newMovieYear
    };
    this.movies.push(newMovie);
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}