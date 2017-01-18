import { Component } from '@angular/core';
import { OMDBServiceComponent } from '../services/omdb.service';
import { Movie } from './movie';

@Component({
    selector: 'movies-list',
    templateUrl: './app/movies/movies-list.component.html',
    styles: [`
        .search {
            color: black;
            font-size: 20px;
        }
        tr {
            background-color: #F7F7F9;
        }
        button {
            font-size: 14px;
        }
    `]
})

export class MoviesListComponent {
    searchResult: any[];
    movies: Movie[] = [];
    images: any[];
    searchItem: string;
    showImage: boolean = false;
    imageWidth: number = 100;
    imageMargin: number = 2;

    constructor(private tmdbService: OMDBServiceComponent) {}

    searchMovie() {
        this.movies = [];
        this.tmdbService.getMovie(this.searchItem).subscribe(items => {
            for (let movie of items.Search) {
                this.tmdbService.getDetails(movie).subscribe(movie => {
                    let newMovie = new Movie(movie.Title, movie.Director, movie.Year,
                        movie.Genre, movie.Runtime, movie.Rated, movie.Plot, movie.Poster);
                    this.movies.push(newMovie);
                })
            }
        });
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }
}