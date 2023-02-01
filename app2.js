`use strict`;
// const arr1 = [5, 6, 2];
// const arr2 = [3, 7, 1];

let arr1 = [];
for (let i = 0; i < 3; i++)
  arr1.push(+prompt("Enter 3 numbers of first array "));
let arr2 = [];
for (let i = 0; i < 5; i++)
  arr2.push(+prompt("Enter 3 numbers of second array "));
const arrJoin = [...arr1, ...arr2];
console.log(arr1);
console.log(arr2);
// console.log(arrJoin);

arrJoin.sort(function (a, b) {
  return b - a;
});
console.log(...arrJoin);
