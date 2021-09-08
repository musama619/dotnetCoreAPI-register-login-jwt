import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  hide = true;

  @Output() cancelLoginForm = new EventEmitter();


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {console.log(error)})
    console.log(this.model);
  }

  cancel(){
    this.cancelLoginForm.emit(false);
  }

}
