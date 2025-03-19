import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'assets/movies.json';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMovie(movie: { id: number, title: string, year: number, image: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
