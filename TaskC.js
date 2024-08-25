"use strict";
// 100 Days Of Coding Challenge!
/** Quesion 84: Replacing Text in a String:
Write a function that takes a sentence and replaces all instances of the word `JavaScript` with `TypeScript`.*/
//--------------------------------------------------------------------------------------------------------------
/**
 * Function to replace all instances of 'JavaScript' with 'TypeScript' in a sentence.
 * @param sentence - The input sentence.
 * @returns The modified sentence with 'JavaScript' replaced by 'TypeScript'.
 */
// Function to replace JavaScript with TypeScript
function replaceJavaScript(sentence) {
    // Using the replace method with a global regular expression to replace all instances
    return sentence.replace(/JavaScript/g, "TypeScript");
}
// Log the result of the function with an example sentence
const exampleSentence = "A Developer must learn and Practice JavaScript.";
console.log(replaceJavaScript(exampleSentence));
// Output: "A Developer must learn and Practice TypeScript."
