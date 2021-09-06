import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  registerMode = false;
  baseUrl: string = "https://localhost:5001/api/users"

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle(){
    this.registerMode = !this.registerMode;
  }

  
  getUsers(){
    this.http.get(this.baseUrl).subscribe(response => {
      this.users = response;
    }, error => {console.log(error)});
  }

  cancelRegisterMode(event: boolean){
    this.registerMode = event;
  }
}
