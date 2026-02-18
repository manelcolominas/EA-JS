/// JavaScript Data Types

// ------------------ Primitive Data Types ------------------
// Stored by value

// Numbers (integer & floating-point)
const age = 25;
const price = 99.99;
console.log(typeof age, age); // number 25
console.log(typeof price, price); // number 99.99

// Strings
const firstName = "John Doe";
// tipus de variable
console.log(typeof firstName, firstName); // string John Doe


const greeting = `Hola ${firstName}, tu color preferido es el verde`; // Template Literals
console.log(greeting); 

// Booleans
const isAdult = true;


console.log(typeof isAdult, isAdult); // boolean true

// Type Coercion in JavaScript (Dynamic types)
let x;       // x is undefined
x = 5;       // x is a Number
x = "John";  // x is a String

console.log("5" + 3);  // "53" (Number 3 converted to String)
console.log("5" - 3);  // 2   (String "5" converted to Number)
console.log("5" * 2);  // 10  (String "5" converted to Number)
console.log("10" / "2"); // 5 (Both strings converted to numbers)

console.log(5 + true);  // 6 (true converted to 1)
console.log(5 + false); // 5 (false converted to 0)

console.log("10" == 10); // true (loose equality converts "10" to Number) dos iguals == comparar els valors númerics de les varibles
console.log("10" === 10); // false (strict equality, no type conversion) tres iguals === comparar els valors númerics i el tipusd de variables

// Type Conversion in JavaScript
const str = "42";
console.log(Number(str)); // 42 (Converted to number)

const num = 100;
console.log(String(num)); // "100" (Converted to string)

console.log(Boolean(1));  // true
console.log(Boolean(0));  // false


// Undefined (variable declared but not assigned a value)
let unassignedVar;
console.log(typeof unassignedVar, unassignedVar); // undefined undefined

// Null (intentional empty value)
let emptyValue = null;
console.log(typeof emptyValue, emptyValue); // object null (JavaScript quirk)


// ------------------ Non-Primitive Data Types ------------------
// Mutable, stored by reference

// JSON Object (key-value pairs)
const person = {
  name: 'Alice',
  age: 30
};
console.log(typeof person, person); // object { name: 'Alice', age: 30 }

const { personName, personAge } = person; // Destructuring


// Arrays (special object storing multiple values)
const colors = ["red", "green", "blue"];
console.log(typeof colors, colors); // object [ 'red', 'green', 'blue' ]

const [color1, color2] = colors; // Destructuring separa el vector colors en dos altres vectors, color1 = ["red"] i color2 = ["green"]
console.log(color1); //
console.log(color2);

// Functions (special object storing executable code)
function greet ( name ) {
  return `Hi, I'm ${name}`;
}
console.log(typeof greet, greet('Alice')); // function "Hi, I'm Alice"


// Function arrow
// Estructura d’una Arrow Function
// (paràmetres) => expressió
const greetArrow = (name) => `Hi, I'm ${name}`;
console.log(typeof greetArrow, greetArrow('Manel')); // function "Hi, I'm Alice"

// Equivalent amb funcións clàssiques:

/* const returnHiName = function(name) {
    return `Hi, I'm ${name}`;
  };
  
  greetArrow('Manel')      // "Hi, I'm Manel"

*/

/*

  function expression.
  
  🔹 Característiques:

    - És una funció guardada dins una variable

    - La funció pot ser anònima

    - NO té hoisting útil

    - No es pot cridar abans de definir-la

*/

/*
function returnHiName(name) {
  return `Hi, I'm ${name}`;
} */

/*
🔹 Característiques

És una function declaration

Té nom propi (returnHiName)

Té hoisting complet

Pots cridar-la abans que aparegui al codi
*/


// Date (handling time & date)
const today = new Date();
console.log(typeof today, today); // object current date and time

// Set (collection of unique values)
const set = new Set([1, 2, 3, 3, 2]);
console.log(typeof set, set); // object Set { 1, 2, 3 }

//Map (key-value pairs with any type of key)
const map = new Map();
map.set("name", "Bob");
console.log(typeof map, map); // object Map { 'name' => 'Bob' }


// ------------------ const vs let ------------------

// 1. CONST Primitive Data Types: Cannot be reassigned
const pi = 3.14159;
// pi = 3.14; // ❌ Uncaught TypeError: Assignment to constant variable.

// 2. CONST Non-Primitive Data Types: A common trap!
// The reference is constant, but the content is MUTABLE.
const student = { name: "Andreu", age: 21 };
student.age = 22; // ✅ This works! We are mutating the property, not the object reference.
// student = { name: "Marc" }; // ❌ TypeError: We cannot point 'student' to a new object.

// 3. LET: Use it for values that MUST change
let counter = 0;
counter += 1; // ✅ Reassignment allowed.

// 4. BLOCK SCOPE: Both respect the block { }
if (true) {
    const blockScoped = "I only exist inside this IF";
    let alsoBlockScoped = "Me too";
}
// console.log(blockScoped); // ❌ ReferenceError: Not defined outside the block.