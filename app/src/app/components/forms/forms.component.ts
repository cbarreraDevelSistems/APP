import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  name= '';
  email= '';
  age= 18;
  password = '';

  onSubmit(){
    console.log(this.name, this.email, this.age, this.password)
  }

}
