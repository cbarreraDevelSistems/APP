import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-product',
  imports: [MovieComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  public name: string
  public brand : string
  public price : number

  public mostrar_peliculas : boolean = true

  constructor(){
    console.log("Component is load")
    alert("Hello")
    this.name = "ESE",
    this.brand = "Hello",
    this.price = 123
  }

//    ngOnChanges   (){
//        console.log("ha cambiado")
//     }
 
    ngDoCheck(){
        console.log("Se ha actualizado")
    }
 
    ngAfterViewInit(){
        console.log("La vista esta cargada")
    }
 
    cambiarNombre(){
        this.name = "Laptop asus ROG 2025 con 16 de ram"
    }
 
    ocultarPeliculas(valor : boolean){
        this.mostrar_peliculas = valor
    }
}
