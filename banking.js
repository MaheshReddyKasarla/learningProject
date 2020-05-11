class Account {
  constructor(accountNumber,accountName,accountBalance) {
    this.accountNumber=accountNumber;
    this.accountName=accountName;
    this.accountBalance=accountBalance;
  }
 depositMoney(money) {
   this.money=money;
   this.accountBalance=this.accountBalance+money;
console.log("the amount in  account is",this.accountBalance);
  }
withDrawMoney(money) {
  this.money=money;
  if (this.accountBalance<1000) {
    console.log("cannot give money because ammount is less than 1000");
  }
  else {
    this.accountBalance=this.accountBalance-money;
    console.log("the amount in account is ",this.accountBalance);
  }
}
interest(amount,years){
  this.amount=amount;
  var i=(amount*years*5)/100;
  amount=amount+i;
  console.log("the intrest you will pay will be",i," ,the total amount with interst will be",amount);
}
}
class savingsAccount extends Account {
  constructor(accountNumber,accountName,accountBalance) {

    super(accountNumber,accountName,accountBalance);

  }
}
class currentAccount extends Account{
  constructor(accountNumber,accountName,accountBalance) {
    super(accountNumber,accountName,accountBalance);

  }

}

let customer1=new savingsAccount(12345,"Mahesh Reddy",10000);
let customer2= new currentAccount(12346,"sunny",13000);
customer1.depositMoney(1000);
customer1.interest(14000,4);
customer2.withDrawMoney(1000);
