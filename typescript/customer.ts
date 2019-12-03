export module LoanModule{
 export class cust{
    private custID: number;
    private firstName: string;
    private lastName: string;
    private dob: string;
    constructor(id: number, fname: string, lname: string, dob: string){
        this.custID=id;
        this.firstName=fname;
        this.lastName= lname;
        this.dob = dob;
    }
    get customerID(): number{
        return this.custID;
    }
    set customerID(id: number){
        this.custID=id;
    }
}
var c = new cust(31289, "Happy", "Ahuja", "2/12/1980");
console.log("ID:"+ c.customerID);
}