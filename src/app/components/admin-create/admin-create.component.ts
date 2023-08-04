import { customer } from './../../models/customer';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../services/customer.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  custId:any
  custDob:any
  custName:any
  custPass:any
  custUname:any
  custAddress:any
  custPanNo:any
  corrIdm=false
  corrIdt=false
  message=""

  constructor(private customerService:CustomerService,private loginService:LoginService) { }

  ngOnInit(): void {
     }
  cust = {} as customer ;
  status:any
  OnSubmit(){
    var lenPass = (new String(this.custPass).length)
    var lenUname = (new String(this.custUname).length)
    if(this.custId!=null && this.custId>0 && this.custDob!=null && this.custDob!='' && this.custAddress!=null && this.custAddress!='' && this.custName!=null && this.custName!=''&& this.custPanNo!=null && this.custPanNo!='' && this.custPass!=null && this.custPass!='' && this.custUname!=null && this.custUname!='' && lenPass>5 && lenUname>3)
    {
      this.cust.custId=this.custId
      this.cust.custName=this.custName
      this.cust.custUname=this.custUname
      this.cust.custPass = this.custPass
      this.cust.custAddress=this.custAddress
      this.cust.custPanNo=this.custPanNo
      this.cust.custDob=this.custDob

      console.log("Form is submitted"+this.cust)
      this.customerService.createCustomer(this.cust).subscribe(
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
          this.message="Invalid Details Entered"
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
      this.message="Invalid Details Entered"
    }
  }
}
