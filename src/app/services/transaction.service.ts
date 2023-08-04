import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl="http://localhost:9005/transaction"
  constructor(private http:HttpClient) { }

  getTransactionList(custId:any){
    const params = new HttpParams()
    .set('custId', custId)
    console.log(custId)
  return this.http.get(`${this.baseUrl}/transactionlist`,{params})
  }

  depositUser(accId:any,amount:any){
    const params = new HttpParams()
    .set('accId', accId).set('amount', amount)
    console.log(accId)
    console.log(amount)
    console.log(params)
  return this.http.post(`${this.baseUrl}/deposit?accId=${accId}&amount=${amount}`,{params})
  }

  withdrawUser(accId:any,amount:any){
    const params = new HttpParams()
    .set('accId', accId).set('amount', amount)
    console.log(accId)
    console.log(amount)
    console.log(params)
  return this.http.post(`${this.baseUrl}/withdraw?accId=${accId}&amount=${amount}`,{params})
  }

  transferUser(accIdSource:any,accIdDest:any,amount:any){
    const params = new HttpParams()
    .set('accIdSource', accIdSource).set('accIdDest', accIdDest).set('amount', amount)
    console.log(amount)
    console.log(params)
  return this.http.post(`${this.baseUrl}/transfer?accIdSource=${accIdSource}&accIdDest=${accIdDest}&amount=${amount}`,{params})
  }

}
