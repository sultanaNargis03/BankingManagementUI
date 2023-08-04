import { GlobalConstants } from './../../models/globals';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public correctCred = true
public message:string=""
  credentials={
    password:'',
    userName:''
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  OnSubmit(){

    if(this.credentials.userName!=null && this.credentials.userName!='' && this.credentials.password!=null && this.credentials.password!='')
    {
      var role = ""
      console.log("Form is submitted"+this.credentials.userName+this.credentials.password)
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{

          this.loginService.getCustId(this.credentials.userName).subscribe(
            (response:any)=>{
              console.log(response)
              localStorage.setItem('custId',response)
              this.loginService.getRole(this.credentials.userName).subscribe(
                (response:any)=>{
                  GlobalConstants.role = response
                },
                error=>{
                  role=error.error.text
                  console.log(error.error.text);
                  if(role=="Employee"){
                    window.location.href="/ahome"
                  }
                  else{
                    window.location.href="/uhome"
                  }
                }
              )


            },
            error=>{
              console.log(error)
            }
          )
        this.correctCred=true
        this.message=""
        this.loginService.loginUser(response.token)
        console.log(role);
      },
      error=>{
        this.correctCred=false
        this.message="Username Or Password Incorrect !!!"
        console.log(error)
      })
     //
    }
    else
    {
      this.correctCred=false
      this.message="Please Enter All The Required Details"
    }
  }

}
