import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CineComponent } from './components/cine/cine.component';
import { UserComponent } from './components/user/user.component';
import { SalesComponent } from './components/sales/sales.component';
import { CartComponent } from './components/cart/cart.component';
import { CartSignalsComponent } from './components/cart-signals/cart-signals.component';
import { FatherComponent } from './components/father/father.component';
import { MovieComponent } from './components/movie/movie.component';
import { UsersHTTPComponent } from './components/users-http/users-http.component';
import { Page404Component } from './components/page404/page404.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

export const routes: Routes = [
    {path: "", component: ReactiveFormsComponent}, //ruta por defecto XD :D
    {path: "home", component: ProductComponent},
    {path: "components", component: ProductComponent},
    {path: "cicle", component: MovieComponent},
    {path: "templates", component: UserComponent},
    {path: "directives", component: SalesComponent},
    {path: "models", component: CineComponent},
    {path: "cart", component: CartComponent},
    {path: "signals", component: CartSignalsComponent},
    {path: "comunication", component: FatherComponent},
    // {path: "services/:id", component: UsersHTTPComponent}, 
//para parametros en rutas.Tuto no funcional por restricciones en web
    {path: "services", component: UsersHTTPComponent},
    {path: "forms", component: FormsComponent},
    {path: "reactiveForms", component: ReactiveFormsComponent},
    {path: "**", component: Page404Component},
];
