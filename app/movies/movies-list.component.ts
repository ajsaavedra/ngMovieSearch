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
    timeout;

    constructor(private omdbService: OMDBServiceComponent) {}

    keystrokeListener() {
        if (this.timeout) { clearTimeout(this.timeout); }
        this.timeout = setTimeout(() => {
            this.searchMovie();
        }, 500);
    }

    searchMovie() {
        this.movies = [];
        this.omdbService.getMovie(this.searchItem).subscribe(items => {
            for (let movie of items.Search) {
                if (movie.Type === 'movie' && movie.Poster !== 'N/A') {
                    this.omdbService.getDetails(movie).subscribe(movie => {
                            let newMovie = new Movie(movie.Title, movie.Director, movie.Year,
                                movie.Genre, movie.Runtime, movie.Rated, movie.Plot, movie.Poster);
                            this.movies.push(newMovie);
                    })
                }
            }
        });
    }

    toggleImage() {
        this.showImage = !this.showImage;
    }
}