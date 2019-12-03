var housingLoan = {
    loanNo: 279802,
    type: "MTG",
    amount: 268,
    interest: 6
};
console.log(housingLoan);
var autoLoan = {
    loanNo: 4368249,
    type: "AUTO",
    amount: 739,
    interest: 8,
    refinance: false
};
console.log(autoLoan);
var agLoan = {
    loanNo: 638,
    amount: 6298,
    interest: 0.8,
    computeSI: function () { return agLoan.amount * agLoan.interest; }
};
console.log(agLoan);
console.log(agLoan.computeSI());
var TraditionalLoan = /** @class */ (function () {
    function TraditionalLoan(loanNo, type, amount, interestRate) {
        this.loanNo = loanNo;
        this.type = type;
        this.amount = amount;
        this.interestRate = interestRate;
    }
    TraditionalLoan.prototype.compute = function () {
        return this.amount * this.interestRate;
    };
    return TraditionalLoan;
}());
var tradLoan = new TraditionalLoan(2568, "MTG", 83930, 0.9);
console.log(tradLoan.compute());
