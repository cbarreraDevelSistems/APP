import { Component } from '@angular/core';
import { SonComponent } from '../son/son.component';

@Component({
  selector: 'app-father',
  imports: [SonComponent ],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {

  nameFather: string = "Cris WEB";


  greetingReceived: string = "";
  
  receiveGreeting(greeting: string){
    this.greetingReceived = greeting;
  }

}
