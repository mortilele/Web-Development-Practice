import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FilmsService} from '../films.service';
import {Film} from '../Film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film;

  constructor(
    private route: ActivatedRoute,
    private filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    this.getFilm();
    this.film.viewCount++;
  }

  getFilm() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmsService.getFilm(id).subscribe(film => this.film = film);
  }

}
