import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../../services/transaction.service';
import { LoginService } from './../../services/login.service';
import { AccountService } from './../../services/account.service';
import { accountList } from './../../models/accountList';
@Component({
  selector: 'app-user-withdraw',
  templateUrl: './user-withdraw.component.html',
  styleUrls: ['./user-withdraw.component.css']
})
export class UserWithdrawComponent implements OnInit {

  accounts:accountList[]=[]
  custId=this.loginService.getCustomerId()
  accId:any
  amount:any
  corrIdm=false
  corrIdt=false
  message=""
  status:any

  constructor(private transactionService:TransactionService,private loginService:LoginService,private accountService:AccountService) { }

  ngOnInit(): void {
    this.getIds()
  }


  getIds(){
    this.accountService.getAccountList(this.custId).subscribe(
      (response:any)=>{
        this.accounts = response
        this.corrIdt=false
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
  }

  OnSubmit(){
    if(this.accId!=null && this.accId>0 && this.amount!=null && this.amount>0)
    {
      console.log("Form is submitted"+this.accId)
      this.transactionService.withdrawUser(this.accId,this.amount).subscribe(
        (response:any)=>{
          this.status = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.status)
      },
      error=>{
        console.log(error.error.message)
        this.corrIdt=false
        this.corrIdm=true
        if(error.error.message=="Cannot withdraw!! Insufficient Balance")
        {
          this.message=error.error.message
        }
        else
        if(error.error.message=="You are unauthorized")
        {
          this.message="Login Again"
          this.loginService.logout()
          window.location.replace('')
        }
        else
        {
          this.message="Account with this id not found"
        }
      })
     //
    }
    else
    {
      console.log("form not submitted")
      this.corrIdm=true
      this.corrIdt=false
      this.message="Credentials Invalid"
    }
  }
}
