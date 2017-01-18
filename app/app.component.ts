import { Component } from '@angular/core';
import { TMDBServiceComponent } from './services/tmdb.service';

@Component({
    selector: 'my-app',
    template: `
        <header>
            <nav class="navbar navbar-default">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand">ngMovieSearch</a>
                </div>
            </nav>
        </header>
        <movies-list></movies-list>
    `,
    providers: [ TMDBServiceComponent ]
})

export class AppComponent{}