import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies/movies-list.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule
     ],
    declarations: [
        AppComponent,
        MoviesListComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}