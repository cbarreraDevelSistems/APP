import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-son',
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
  nameSon: string = "Juanito";

  @Input()
  nameMyFather: string = "";

  @Output() sonGreet = new EventEmitter();
  sendGreeting(){
    this.sonGreet.emit("Hello how are you father?? Greetings :)")
  }
}
