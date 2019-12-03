import { LoanModule } from "./customer";

export class PrivCust extends LoanModule.cust {
    private offer: number;
    public get off(): number {
        return this.offer;
    }
    public set off(value: number) {
        this.offer = value;
    }
    constructor(id: number, fname: string, lname: string, dob: string) {
        super(id, fname, lname, dob);
    }

}