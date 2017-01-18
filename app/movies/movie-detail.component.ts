import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Movie } from './movie';
import { OMDBServiceComponent } from '../services/omdb.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'movie-detail',
    templateUrl: './app/movies/movie-detail.component.html',
    styles: [`
        .plot {
            padding-top: 20px;
            padding-bottom: 30px;
            font-size: 17px;
        }
    `]
})

export class MovieDetailComponent implements OnInit {
    private movie = [];
    imageWidth: number = 350;
    imageMargin: number = 2;

    constructor(private route: ActivatedRoute, private router: Router, 
                private omdbService: OMDBServiceComponent) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.omdbService.getDetails(null, params['id']))
            .subscribe(movie => { this.movie = movie });
    }
}