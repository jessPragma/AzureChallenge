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
  newMovieImage: string = 'assets/default-movie.jpg';

  addMovie() {
    const newMovie = {
      id: this.movies.length + 1,
      title: this.newMovieTitle,
      year: this.newMovieYear,
      image: this.newMovieImage
    };

    this.movies.push(newMovie);
    
    this.newMovieTitle = '';
    this.newMovieYear = null;
    this.newMovieImage = '';
    (document.querySelector('input[type="file"]') as HTMLInputElement).value = '';
  }

  deleteMovie(id: number): void {
    this.movies = this.movies.filter(movie => movie.id !== id);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.newMovieImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}