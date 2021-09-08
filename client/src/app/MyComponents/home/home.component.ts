import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any;
  registerMode = false;
  loginMode = false;

  baseUrl: string = 'https://localhost:5001/api/';

  constructor(private http: HttpClient, public accountService: AccountService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
    this.loginMode = false;
  }

  getUsers() {
    this.http.get(this.baseUrl + 'users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  loginToggle() {
    this.loginMode = !this.loginMode;
    this.registerMode = false;
  }

  cancelLoginMode(event: boolean) {
    this.loginMode = event;
  }

  showLogin(event: boolean) {
    this.loginMode = event;
    this.registerMode = false;
  }
}
