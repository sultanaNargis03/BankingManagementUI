import { Component, OnInit } from '@angular/core';
import { transaction } from 'src/app/models/transaction';
import { LoginService } from 'src/app/services/login.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})
export class UserHistoryComponent implements OnInit {

  custId=this.loginService.getCustomerId()
  corrIdm=false
  corrIdt=false
  message=""
  constructor(private transactionService:TransactionService,private loginService:LoginService) { }

  transactions:transaction[]=[]
  ngOnInit(): void {
    this.OnSubmit()
  }


  OnSubmit(){
    if(this.custId!=null)
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
