export interface transaction{
    transactionId:number,
    transactionType:string,
    customerId:number,
    sourceAccountId:number,
    destinationAccountId:number,
    amount:number,
    serviceCharge:number,
    dateOfTransaction:string,
    transactionStatus:string,
    balance:number
  }
