import { Injectable } from '@angular/core';
import { Film, FILMS } from './Film';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor() { }

  getFilms(): Observable<Film[]> {
    return of(FILMS);
  }

  getFilm(id: number): Observable<Film> {
    return of(FILMS.find(film => film.id === id));
  }

}
