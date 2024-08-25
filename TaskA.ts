// 100 Days Of Coding Challenge!

/** Quesion 82: Find the Length of a String:
Write a function that takes a string as an argument and returns the number of characters in the string.*/

//--------------------------------------------------------------------------------------------------------

/**
 * Function to find the length of a string.
 * @param str - The input string.
 * @returns The length of the string.
 */

// Function "getStringLength()" takes a string as an argument and returns the number of characters in the string.
function getStringLength(str: string): number {
  // Using the length property to get the number of characters in the string
  return str.length;
}

// logging the length of the example string
const exampleString = "TypeScript!";
console.log(
  "Length of the string 'TypeScript!'",
  getStringLength(exampleString)
); // Output: 11
