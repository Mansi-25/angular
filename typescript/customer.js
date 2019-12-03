"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoanModule;
(function (LoanModule) {
    var cust = /** @class */ (function () {
        function cust(id, fname, lname, dob) {
            this.custID = id;
            this.firstName = fname;
            this.lastName = lname;
            this.dob = dob;
        }
        Object.defineProperty(cust.prototype, "customerID", {
            get: function () {
                return this.custID;
            },
            set: function (id) {
                this.custID = id;
            },
            enumerable: true,
            configurable: true
        });
        return cust;
    }());
    LoanModule.cust = cust;
    var c = new cust(31289, "Happy", "Ahuja", "2/12/1980");
    console.log("ID:" + c.customerID);
})(LoanModule = exports.LoanModule || (exports.LoanModule = {}));
