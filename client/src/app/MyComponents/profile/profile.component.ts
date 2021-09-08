import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit  {

  dataSource: any;
  displayedColumns: string[] = ['username', 'edit', 'delete'];
  hide = true;
  users: any;

  constructor(private accountService: AccountService) {

   }

  ngOnInit(): void {
      this.accountService.getUsers().subscribe(
        (response) => {
          this.users = response;
          this.dataSource = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }


}
