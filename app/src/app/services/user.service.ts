import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
      this.apiUrl = "https://reqres.in/";
  }

  getUsers(){
    console.log("Http request execute!!");
    return this.http.get(this.apiUrl+"api/users?page=2")
  }
}
