import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

export const appConfig = {
  imports: [
    importProvidersFrom(HttpClientModule), 
    AppComponent, 
    MoviesComponent
  ]
};
