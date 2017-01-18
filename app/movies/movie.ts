export class Movie {
    title: string;
    director: string;
    releaseDate: string;
    genre: string;
    runtime: number;
    rating: number;
    description: string;
    posterUrl: string;

    constructor(title: string, director: string, releaseDate: string,
        genre: string, runtime: number, rating: number,
        description: string, posterUrl: string) {
            this.title = title;
            this.director = director;
            this.releaseDate = releaseDate;
            this.genre = genre;
            this.runtime = runtime;
            this.rating = rating;
            this.description = description;
            this.posterUrl = posterUrl;
    }
}