"use strict";
const sum = (a, b) => a + b;
console.log(sum(1, 2));
// GENERICS 
function dummy1(a) {
    return a;
}
function dummy3(a) {
    return [a];
}
console.log(dummy1(2));
console.log(dummy1("khan"));
console.log(dummy3("khan"));
;
function updateUser(updatedProps) {
    // hit the database tp update the user
}
updateUser({});
