var firstName : string;
var lastName : string;
enum gender{
    MALE,FEMALE,OTHERS
}
var list: any=[1, "Rajiv Chowk", true, 3527829];
var gen: gender;
gen=gender.FEMALE;
firstName = "Mansi";
lastName = "Arora";
console.log("FN=",firstName);
console.log("LN=",lastName);
console.log("Gender=",gender[gen]);
var phoneNos:number[]=[63992,247823,37802930];
phoneNos.forEach(phonenumber=>{console.log(phonenumber)});
list.forEach(l=>{console.log(l)});
