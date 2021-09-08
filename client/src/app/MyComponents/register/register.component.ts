import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  hide = true;

  constructor(private accountService: AccountService) {}

  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  @Output() moveToLogin = new EventEmitter();

  ngOnInit(): void {}

  register() {
    // console.log(this.model);
    this.accountService.register(this.model).subscribe(
      (response) => {
        console.log(response);
        this.moveToLogin.emit(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
