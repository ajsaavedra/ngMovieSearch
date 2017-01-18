import { Component } from '@angular/core';
import { OMDBServiceComponent } from './services/omdb.service';

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
        <router-outlet></router-outlet>
    `,
    providers: [ OMDBServiceComponent ]
})

export class AppComponent{}