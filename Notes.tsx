/** @format */

let fname: string;
let age: number;
//if we want to accept age as number and sting we used union '|'
// like let age: number | string
let isStudent: boolean;
let hobbies: string[]; //array of string, if we want to give array of number then number number[]

//tupple similar to array
// contain fixed amount of type and values that are defined on time of declaration
let role: [number, string];
// role = [ 57, 'gfb'];

//Function Type

let printName: (name: string) => never; //void returns unknown and never doesnt return anything

//object

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: 'Saurabh',
  age: 12,
};
