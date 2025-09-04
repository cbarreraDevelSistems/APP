import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";

@Injectable({
    providedIn: "root"
})

export class MovieService{

    public movies: Array<Movie>;

    constructor(){
        this.movies = [
            new Movie(1, "El padrino", "Mafia", "Copola", 1976, "Prime", false),
            new Movie(2, "Inception", "Sci-Fi", "Nolan", 2010, "Netflix", true),
            new Movie(3, "Titanic", "Romance", "Cameron", 1997, "Disney+", false),
            new Movie(4, "Gladiator", "Action", "Scott", 2000, "HBO", true),
            new Movie(5, "Amélie", "Comedy", "Jeunet", 2001, "Mubi", false),
            new Movie(6, "Parasite", "Thriller", "Bong Joon-ho", 2019, "Hulu", true),
            new Movie(7, "The Matrix", "Sci-Fi", "Wachowski", 1999, "Netflix", false),
            new Movie(8, "Spirited Away", "Animation", "Miyazaki", 2001, "Crunchyroll", true),
            new Movie(9, "Whiplash", "Drama", "Chazelle", 2014, "Prime", false),
            new Movie(10, "Mad Max: Fury Road", "Action", "George Miller", 2015, "HBO", true)
        ];
    }

    getMovies(): Array<Movie>{
        return this.movies
    }
    

    greetingService(){
        console.log("Hello from my service!!!");
    }

}