import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesComponent } from './movies.component';
import { MovieService } from '../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let movieService: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoviesComponent, HttpClientTestingModule],
      providers: [MovieService],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete a movie', () => {
    component.movies = [
      { id: 1, title: 'El Rey Leon', year: 2010, image: 'image.jpg' },
      { id: 2, title: 'Matrix', year: 1999, image: 'image.jpg' }
    ];
    const initialMoviesCount = component.movies.length;
    component.deleteMovie(1);
    expect(component.movies.length).toBe(initialMoviesCount - 1);
  });

  it('should add a new movie', () => {
    const initialMoviesCount = component.movies.length;
  
    component.newMovieTitle = 'Interstellar';
    component.newMovieYear = 2014;
    component.newMovieImage = 'image.jpg';
  
    component.addMovie();
    
    expect(component.movies.length).toBe(initialMoviesCount + 1);
    
    expect(component.movies).toContain(jasmine.objectContaining({
      title: 'Interstellar',
      year: 2014,
      image: 'image.jpg',
    }));
  });
  
});
