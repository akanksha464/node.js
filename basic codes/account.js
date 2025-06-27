

var account=function(amount){

     var balance=amount;

     //Inner function
     var getBalance=function(){
        return balance;
     };
     var withdraw=function(amount){
        balance=balance-amount;

     };

     var deposit=function(amount){
        balance=balance+amount;
     }
     //publish inner functions to outside world
     return{
     receiveBalance:getBalance,
     debit:withdraw,
     credit:deposit
     }
    
}

 var acct123=new account(45000);                           
 var data= acct123. receiveBalance();
 console.log("Balance="+data);

 var amount=5000;
 acct123.credit(amount);
 data=acct123.receiveBalance();
console.log("Balance="+data);