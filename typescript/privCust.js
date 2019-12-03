"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var PrivCust = /** @class */ (function (_super) {
    __extends(PrivCust, _super);
    function PrivCust(id, fname, lname, dob) {
        return _super.call(this, id, fname, lname, dob) || this;
    }
    Object.defineProperty(PrivCust.prototype, "off", {
        get: function () {
            return this.offer;
        },
        set: function (value) {
            this.offer = value;
        },
        enumerable: true,
        configurable: true
    });
    return PrivCust;
}(customer_1.LoanModule.cust));
exports.PrivCust = PrivCust;
