import { LoginService } from './../../services/login.service';
import { transaction } from './../../models/transaction';
import { TransactionService } from './../../services/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-statement',
  templateUrl: './user-statement.component.html',
  styleUrls: ['./user-statement.component.css']
})
export class UserStatementComponent implements OnInit {

  custId:any
  corrIdm=false
  corrIdt=false
  message=""
  constructor(private transactionService:TransactionService,private loginService:LoginService) { }

  transactions:transaction[]=[]
  ngOnInit(): void {
  }

  OnSubmit(){
    if(this.custId!=null && this.custId>0)
    {
      console.log("Form is submitted"+this.custId)
      this.transactionService.getTransactionList(this.custId).subscribe(
        (response:any)=>{
          this.transactions = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.transactions)
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
         // this.message="Customer With This Id Not Found!!"
          this.message="No Transaction History Found!!"
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
