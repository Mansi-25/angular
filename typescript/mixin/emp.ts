import { Programmer } from "./programmer";
import { manager } from "./manager";

class Emp extends Person implements Programmer, manager{
    constructor(name,age,public salary){
        
    }

}
applyMixin(Emp,[Programmer,manager]);