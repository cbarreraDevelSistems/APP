import { Component } from '@angular/core';
import { SalesComponent } from '../sales/sales.component';
import { ProductComponent } from "../product/product.component";
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { cambiaLetrasPipe } from '../../pipes/cambiaLetras.pipe';

@Component({
  selector: 'app-user',
  imports: [SalesComponent,cambiaLetrasPipe, LowerCasePipe, DatePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  web = "google.com"

  brandPadel = [
    {id: 1, name: "Siux"},
    {id: 2, name: "Kombat"},
    {id: 3, name: "Bupadel"},
    {id: 4, name: "Head"},
    {id: 5, name: "Adidas"},
    {id: 6, name: "Starvite"}
  ]

  user ={
    id: 1,
    name: "Cris",
    nick: "xd",
    role: "admin"
  }

  Date = new Date(2030,12,25);

  ngOnInit(){
    this.brandPadel= []
  }

  redirect = false;

  changeRedirect(){
    if(this.redirect == false){
      this.redirect = true;
    }else{
      this.redirect = false;
    }
  }
}
