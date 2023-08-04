import { customer } from './../models/customer';
import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl="http://localhost:9003/customer"
  constructor(private http:HttpClient) { }

  getCustomerDetails(custId:any){
    const params = new HttpParams()
    .set('custId', custId)
    console.log(custId)
  return this.http.get(`${this.baseUrl}/getcustomerdetails/${custId}`,{params})
  }

  createCustomer(customer:any){
    const params = new HttpParams()
    .set('custAddress', customer.custAddress)
    .set('custDob', customer.custDob)
    .set('custId', customer.custId)
    .set('custName', customer.custName)
    .set('custPanNo', customer.custPanNo)
    .set('custUname',customer.custUname)
    .set('custPass',customer.custPass)
    console.log(customer)
    return this.http.post(`${this.baseUrl}/createcustomer?custAddress=${customer.custAddress}&custDob=${customer.custDob}&custId=${customer.custId}&custName=${customer.custName}&custPanNo=${customer.custPanNo}&custUname=${customer.custUname}&custPass=${customer.custPass}`,{params})
  }
}
