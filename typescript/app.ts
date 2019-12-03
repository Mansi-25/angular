import {LoanModule} from "./customer";
import {PrivCust} from "./privCust";

var c = new LoanModule.cust(31289, "Happy", "Ahuja", "2/12/1980");
console.log("ID:"+ c.customerID);

var PC = new PrivCust(31289, "Happy", "Ahuja", "2/12/1980");
PC.off=0.5;
console.log(PC);