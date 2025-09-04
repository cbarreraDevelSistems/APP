import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-http',
  imports: [],
  templateUrl: './users-http.component.html',
  styleUrl: './users-http.component.css'
})
export class UsersHTTPComponent {

  public usersList: any;

  constructor(
    private _userService: UserService
  ){
    console.log("User component loading!!")
  }

  ngOnInit(){
    // this.usersList = this._userService.getUsers();

    this._userService.getUsers().subscribe(
      data => {
        this.usersList = data;
        console.log(this.usersList);
      },
      error =>{
        console.log(error)
      }
    );
  }
}
