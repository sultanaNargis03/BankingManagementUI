import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl="http://localhost:9001/auth"
  constructor(private http:HttpClient) { }

  generateToken(credentials:any){
  return this.http.post(`${this.baseUrl}/authenticate`,credentials)
  }
  getRole(userName:any){
    console.log(userName)
  return this.http.get(`${this.baseUrl}/getrole?userName=${userName}`,userName)
  }
  getCustId(userName:any){
  return this.http.get(`${this.baseUrl}/getcustid?userName=${userName}`,userName)
  }

loginUser(token:any){
  localStorage.setItem("token",token)
  return true;
}

isLoggedIn(){
  let token = localStorage.getItem("token");
  if(token==undefined || token==='' || token==null)
  {
    return false;
  }
  else
  {
    return true;
  }
}

logout(){
  localStorage.removeItem("token")
  localStorage.removeItem("custId")
  return true;
}

getToken(){
  return localStorage.getItem("token")
}

getCustomerId(){
  return localStorage.getItem("custId")
}
}
