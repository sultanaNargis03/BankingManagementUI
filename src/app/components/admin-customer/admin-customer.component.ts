import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from './../../services/customer.service';
import { customer } from 'src/app/models/customer';



@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {

  custId:any
  corrIdm=false
  corrIdt=false
  message=""
  constructor(private customerService:CustomerService,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  customer:any
  OnSubmit(){
    if(this.custId!=null && this.custId>0)
    {
      console.log("Form is submitted"+this.custId)
      this.customerService.getCustomerDetails(this.custId).subscribe(
        (response:any)=>{
          this.customer = response
          this.corrIdt=true
          this.corrIdm=false
          this.message=""
        console.log(this.customer)
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
