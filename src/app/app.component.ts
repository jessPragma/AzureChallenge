import { Component, OnInit } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, MoviesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'Lista de Películas';

}