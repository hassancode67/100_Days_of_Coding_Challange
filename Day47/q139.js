"use strict";
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
Object.defineProperty(exports, "__esModule", { value: true });
// Reserves keyword "const" use for declare block scoped varaible which is not updateable
const name1 = "Hassan";
// Reserved keyword "for" which is used for creating loops
for (const i of name1) {
    console.log(i);
}
// Reserved Keyword "function" used for declaring functions
function add(a, b) {
    return a + b;
}
