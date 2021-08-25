import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  myimage: string = 'assets/image/accounts.jpeg';
  constructor() {}

  ngOnInit(): void {}
}
