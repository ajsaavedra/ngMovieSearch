import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Movie } from '../movies/movie';
import 'rxjs/add/operator/map';

@Injectable()
export class OMDBServiceComponent {
    constructor(private http: Http) {}

    getMovie(title: string) {
        return this.http.get('http://www.omdbapi.com/?s=' +
            title.replace(" ", "+") + '&y=&plot=short&r=json')
            .map(res => res.json());
    }

    getDetails(movie: any = null, id: string = null) {
        let searchID = movie ? movie.imdbID : id;
        return this.http.get('http://www.omdbapi.com/?i=' + searchID +
            '&plot=short&r=json').map(res => res.json());
    }
}