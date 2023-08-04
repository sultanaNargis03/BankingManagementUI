import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl="http://localhost:9002/account"
  constructor(private http:HttpClient) { }

  getAccountList(custId:any){
    const params = new HttpParams()
    .set('custId', custId)
    console.log(custId)
  return this.http.get(`${this.baseUrl}/getcustomeraccounts/${custId}`,{params})
  }

  getStatementList(accId:any,fDate:any,toDate:any){
    const params = new HttpParams()
    .set('accId', accId).set('fromDate',fDate).set('toDate',toDate)
    console.log(params)
  return this.http.get(`${this.baseUrl}/getaccountstatement`,{params})
  }

}
