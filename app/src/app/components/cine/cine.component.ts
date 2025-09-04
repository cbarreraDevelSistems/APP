import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  public title: string;
  public movies: Array<Movie>;

  // to work with forms and bidirectional binding
  public my_movie: string = "";
  public emptyMovie: string[] = []

  public color: string = "#FFFFFF";

  constructor(
    private movieService: MovieService,
  ){
    this.title = "Models";
    this.movies = this.movieService.getMovies();
  }
  
  ngOnInit(){
    console.log(this.movies)

    this.movieService.greetingService();
  }

/*   ngDoCheck(){
    console.log(this.my_movie);
  } */

  showMovie(){
    alert(this.my_movie)
  }

  addMovie(){
    // this.emptyMovie.push(this.my_movie)

    let Identifier = this.movies[this.movies.length-1].id+1;
    let newMovie = new Movie(Identifier, this.my_movie)

    console.log(newMovie)
    this.movies.push(newMovie)
  }

  deleteMovie(index: number){
    this.movies.splice(index, 1)
  }

  makingFocus(){
    console.warn("You are inside the movie input!!");
  }

  leavingFocus(){
    console.warn("You are out the movie input!!");
  }

  pressingKeys(event: KeyboardEvent){
    console.info("You are pressing the key "+event.key)
  }
}
