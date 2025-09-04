import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-sales',
  imports: [MovieComponent, NgClass, NgStyle],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})

export class SalesComponent {
  public painting : boolean = false;

  public show : string = "si";
  public show1 : string = "no";
}
