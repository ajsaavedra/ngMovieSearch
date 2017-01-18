import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OMDBServiceComponent {
    constructor(private http: Http) {}

    getMovie(title: string) {
        return this.http.get('http://www.omdbapi.com/?s=' +
            title.replace(" ", "+") + '&y=&plot=short&r=json')
            .map(res => res.json());
    }

    getDetails(movie) {
        return this.http.get('http://www.omdbapi.com/?i=' + movie.imdbID +
            '&plot=short&r=json').map(res => res.json());
    }
}