"use strict";
// 100 Days Of Coding Challenge!
/** Quesion 83: Converting to Upper and Lower Case:
Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.*/
//---------------------------------------------------------------------------------------------------
/**
 * Function to convert a string to uppercase and then to lowercase.
 * @param str - The input string.
 */
// Function "convertCase()" takes a string as a parameter
function convertCase(str) {
    // Convert the string to uppercase
    const upperCaseStr = str.toUpperCase();
    console.log("Uppercase:", upperCaseStr);
    // Convert the string to lowercase
    const lowerCaseStr = str.toLowerCase();
    console.log("Lowercase:", lowerCaseStr);
}
// Example changing the case of a string
const exampleString2 = "TypeScript!";
convertCase(exampleString2);
// Output:
// Uppercase: TYPESCRIPT!
// Lowercase: typescript!
