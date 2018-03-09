console.log("Hola bebe");
// types
var myString = "Hello mano";
myString = 22 + "";
var myNumber = 22;
var myBool = false;
var myVar = "hello";
myVar = false;
// Arrays
var StringArray = ["item1", "item2", "item3"];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
// tuple 
var strNumTuple;
strNumTuple = ["Hello", 1];
// void, undedined and null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
//funciones 
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
document.write(getName("Emanuel", "Torres"));
