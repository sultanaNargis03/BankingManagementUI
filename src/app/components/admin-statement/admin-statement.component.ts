import { statement } from './../../models/statement';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../services/account.service';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-admin-statement',
  templateUrl: './admin-statement.component.html',
  styleUrls: ['./admin-statement.component.css']
})
export class AdminStatementComponent implements OnInit {
  max:any
  accId:any
  fDate:any
  toDate:any
  corrIdm=false
  corrIdt=false
  message=""
  constructor(private accountService:AccountService,private loginService:LoginService) { }
  statements:statement[]=[]
  ngOnInit(): void {
    var d = new Date();
    d.setMonth(d.getMonth() - 1);
    this.toDate = new Date().toISOString().split("T")[0];
    this.fDate = d.toISOString().split("T")[0];
    this.max = new Date().toISOString().split("T")[0];
  }


  OnSubmit(){
    if(this.accId!=null && this.accId>0 && this.fDate!=null && this.fDate!='' && this.toDate!=null && this.toDate!='')
    {
      console.log("Form is submitted"+this.accId)
      this.accountService.getStatementList(this.accId,this.fDate,this.toDate).subscribe(
        (response:any)=>{
          this.statements = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.statements)
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
      this.message="Invalid Entries"
    }
  }
}
