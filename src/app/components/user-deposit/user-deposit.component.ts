import { transactionStatus } from './../../models/transactionStatus';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../../services/transaction.service';
import { LoginService } from './../../services/login.service';
import { AccountService } from './../../services/account.service';
import { accountList } from './../../models/accountList';

@Component({
  selector: 'app-user-deposit',
  templateUrl: './user-deposit.component.html',
  styleUrls: ['./user-deposit.component.css']
})
export class UserDepositComponent implements OnInit {

  custId=this.loginService.getCustomerId()
  accId:any
  amount:any
  corrIdm=false
  corrIdt=false
  message=""
  status:any
  accounts:accountList[]=[]
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
      this.transactionService.depositUser(this.accId,this.amount).subscribe(
        (response:any)=>{
          this.status = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.status)
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
          this.message="Account with this id not found"
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
      this.message="Credentials Invalid"
    }
  }
}
