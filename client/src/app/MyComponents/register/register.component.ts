import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private accountService: AccountService) {}

  @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();

  ngOnInit(): void {}

  register() {
    // console.log(this.model);
    this.accountService.register(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error)
    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
