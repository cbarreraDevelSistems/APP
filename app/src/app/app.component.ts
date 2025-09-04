import { Component } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { SalesComponent } from './components/sales/sales.component';
import { config } from './models/config';
import { CineComponent } from './components/cine/cine.component';
import { CartComponent } from './components/cart/cart.component';
import { CartSignalsComponent } from "./components/cart-signals/cart-signals.component";
import { FatherComponent } from './components/father/father.component';
import { UsersHTTPComponent } from './components/users-http/users-http.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title1 = 'app';

  title = config.title;
  description = config.description;
}
