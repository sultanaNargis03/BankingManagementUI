import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { accountList } from './../../models/accountList';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  custId=this.loginService.getCustomerId()
  corrIdm=false
  corrIdt=false
  message=""
  constructor(private accountService:AccountService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.OnSubmit()
  }
  accounts:accountList[]=[]
  OnSubmit(){
    if(this.custId!=null)
    {
      console.log("Form is submitted"+this.custId)
      this.accountService.getAccountList(this.custId).subscribe(
        (response:any)=>{
          this.accounts = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.accounts)
      },
      error=>{
        console.log(error)
        if(error.error.message=="You are unauthorized")
        {
          this.message="Login Again"
          this.loginService.logout()
          window.location.replace('')
        }
        else
        {
          this.message="Customer with this id not found"
        }
        this.corrIdt=false
        this.corrIdm=true
      })
     //
    }
    else
    {
      console.log("form not submitted")
      this.corrIdm=true
      this.corrIdt=false
      this.message="Customer Id Invalid"
    }
  }
}
