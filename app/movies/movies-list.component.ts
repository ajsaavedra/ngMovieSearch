import { Component } from '@angular/core';
import { TMDBServiceComponent } from '../services/tmdb.service';

@Component({
    selector: 'movies-list',
    templateUrl: './app/movies/movies-list.component.html',
    styles: [`
        .search {
            color: black;
        }
    `]
})

export class MoviesListComponent {
    movies: any[];
    images: any[];
    searchItem: string;
    showImages: boolean = false;

    constructor(private tmdbService: TMDBServiceComponent) {}

    searchMovie() {
        this.tmdbService.getMovie(this.searchItem)
                .subscribe(movie => { 
                    this.movies = movie.Search; 
                }
        );
    }

    toggleImages() {
        this.showImages = !this.showImages;
    }
}