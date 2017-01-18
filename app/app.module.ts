import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'movies',  component: MoviesListComponent },
    { path: 'movies/movie-detail/:id', component: MovieDetailComponent},
    { path: '', redirectTo: '/movies', pathMatch: 'full'}
];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
     ],
    declarations: [
        AppComponent,
        MoviesListComponent,
        MovieDetailComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}