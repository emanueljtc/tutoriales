console.log("Hola bebe");

// types

var myString: string =  "Hello mano";
myString =  22 + "";

var myNumber:number = 22;

var myBool: boolean = false

var myVar: any = "hello"
myVar = false;

// Arrays
var StringArray: string[] = ["item1", "item2", "item3"];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false, true];

// tuple 
var strNumTuple: [string, number];
strNumTuple = ["Hello", 1];

// void, undedined and null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;



//funciones 

function getSum(num1: number, num2: number):number
{
    return num1 + num2;
}

let mySum = function(
    num1: number | string,
    num2: number | string): number {
        if(typeof(num1) === 'string'){
            num1 =  parseInt(num1);
        }
        if(typeof(num2) === 'string'){
            num2 = parseInt(num2);
        }
        return num1 + num2;
    }

function getName(firstName:string, 
                    lastName?:string)
    :string{
        if(lastName == undefined){
            return firstName;
        }
    return `${firstName} ${lastName}`
    }

document.write(getName("Emanuel", "Torres"));