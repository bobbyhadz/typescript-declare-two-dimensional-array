export {};

// EXAMPLE 1 - Declare a Two-dimensional Array in TypeScript

// ✅ Two-dimensional array with an inline declaration
const arr: string[][] = [['bobby'], ['hadz']];

console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 2 - An empty two-dimensional array

// // ✅ Empty two-dimensional array
// const arr: number[][] = [];

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 3 - Declare a Two-dimensional array using an existing Type

// type Employee = {
//   id: number;
//   name: string;
// };

// const arr: Employee[][] = [
//   [{ id: 1, name: 'Alice' }],
//   [{ id: 2, name: 'Bobby Hadz' }],
// ];

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 4 - Declare a Two-dimensional array using an existing interface

// interface Employee {
//   id: number;
//   name: string;
// }

// const arr: Employee[][] = [
//   [{ id: 1, name: 'Alice' }],
//   [{ id: 2, name: 'Bobby Hadz' }],
// ];

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 5 - Declaring a two-dimensional array containing arrays of N elements

// const arr: [[string, string], [string, string]] = [
//   ['bobby', 'hadz'],
//   ['.', 'com'],
// ];

// console.log(arr);

// ---------------------------------------------------

// // EXAMPLE 6 - Declaring a read-only two-dimensional array

// const arr: Readonly<string[][]> = [
//   ['bobby', 'hadz'],
//   ['.', 'com'],
// ];

// console.log(arr);
