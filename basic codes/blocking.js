
//is indirect call
//callback function
//Listener 

//callback fn1
function processRequest2(){
    console.log("Processing request by Handler2");
    console.log("Performing task 2");
    console.log("Generating Response 2");
    console.log("Sending Response 2");

};
//callback fn2
function processRequest1(){
    console.log("Processing request by Handler1");
    console.log("Performing task 1");
    console.log("Generating Response 1");
    console.log("Sending Response 1");
}

//ProcessRequest();


//register callback function as first parameter
//set time interval for automatic function call


//setInterval is a direct call
//but processRequest is indirecter call

//function mapping after certain interval

setInterval(processRequest1,3000);
setInterval(processRequest2,1000);