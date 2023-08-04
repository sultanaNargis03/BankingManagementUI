import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.css']
})
export class UserNavComponent implements OnInit {
  userName="User"
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.userName = "User "+this.loginService.getCustomerId()
  }
}
