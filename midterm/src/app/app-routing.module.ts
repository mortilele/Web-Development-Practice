import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {main} from '@angular/compiler-cli/src/main';
import {MainComponent} from './film/main.component';
import {FilmDetailsComponent} from './film-details/film-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full'},
  { path: 'films', component: MainComponent},
  { path: 'films/:id', component: FilmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
