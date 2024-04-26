//define variables 
var apple = "apple";
var uppercaseApple = " Apple";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//test of equlity and inequality with strings 
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple");
console.log(apple != "apple");
//test using Lowercase function
console.log("IS apple is equal to apple after converting lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs apple is not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");
//numerical tests 
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//less than
console.log("\nIs twenty is less than 10?");
console.log(ten > 10);
//greater than or equal to
console.log("\IS ten is grater than or equaal to 5?");
console.log(ten >= 5);
// less than or equals to
console.log("\nIS twenty is less than or equal to 10");
console.log(twenty <= 10);
//tests using and & or operators
//using &&
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n 20 is grater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 0r 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//test  whether an item is include in array
console.log("\nIs orange include in my Fruits array");
console.log(fruits.includes("orange"));
//not includes
console.log("\nIs orange not includes in my Fruits array");
console.log(!fruits.includes("orange"));
