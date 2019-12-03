var firstName;
var lastName;
var gender;
(function (gender) {
    gender[gender["MALE"] = 0] = "MALE";
    gender[gender["FEMALE"] = 1] = "FEMALE";
    gender[gender["OTHERS"] = 2] = "OTHERS";
})(gender || (gender = {}));
var list = [1, "Rajiv Chowk", true, 3527829];
var gen;
gen = gender.FEMALE;
firstName = "Mansi";
lastName = "Arora";
console.log("FN=", firstName);
console.log("LN=", lastName);
console.log("Gender=", gender[gen]);
var phoneNos = [63992, 247823, 37802930];
phoneNos.forEach(function (phonenumber) { console.log(phonenumber); });
list.forEach(function (l) { console.log(l); });
