interface Loan{
    loanNo:number;
    type:string;
    amount:number;
    interest:number;
    refinance?:boolean;//optional
}
var housingLoan: Loan={
    loanNo:279802,
    type:"MTG",
    amount:268,
    interest: 6
}
console.log(housingLoan);
var autoLoan: Loan={
    loanNo: 4368249,
    type:"AUTO",
    amount:739,
    interest: 8,
    refinance: false
}
console.log(autoLoan);

interface LoanAmount{
    loanNo: number;
    amount:number;
    interest: number;
    computeSI:() => number;
}

var agLoan: LoanAmount={
    loanNo: 638,
    amount: 6298,
    interest: 0.8,
    computeSI: ():number=> {return agLoan.amount*agLoan.interest}
}
console.log(agLoan);
console.log(agLoan.computeSI());

interface TraditionalWay{
    loanNo: number,
    type: string,
    amount: number,
    interestRate: number,
    compute: Function
}
class TraditionalLoan implements TraditionalWay{
    constructor(public loanNo: number, public type: string, public amount:number, public interestRate: number){

    }
    compute(){
        return this.amount*this.interestRate;
    }
}
var tradLoan = new TraditionalLoan(2568, "MTG", 83930, 0.9);
console.log(tradLoan.compute());