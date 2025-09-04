import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  ngOnInit(){
    console.log("THE MOVIE COMPONENT HAS BEEN INITIALIZE");
  }

  ngOnDestroy(){
    console.log("THE COMPONENT HAS BBEN ELIMINATED");
  }
}
