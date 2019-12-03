"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var privCust_1 = require("./privCust");
var c = new customer_1.LoanModule.cust(31289, "Happy", "Ahuja", "2/12/1980");
console.log("ID:" + c.customerID);
var PC = new privCust_1.PrivCust(31289, "Happy", "Ahuja", "2/12/1980");
PC.off = 0.5;
console.log(PC);
