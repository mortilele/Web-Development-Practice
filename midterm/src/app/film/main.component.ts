import { Component, OnInit } from '@angular/core';
import { Film} from '../Film';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  films: Film[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms() {
    this.filmsService.getFilms().subscribe(films => this.films = films);
  }

}
