// Most basic generic types
const arr1: number[] = [1, 2, 3];
// Can be written as...
const arr2: Array<number> = [4, 5, 6];
// querySelector is also a geeric type
// document.querySelector<HTMLElement>('root');
// Type inferred as Element | null
// TS does not know it will be an HTMLInputElement so value is flagged
// const username = document.querySelector('#username').value;
// Fix by passing type to generic, but still not happy as could be null
// const password = document.querySelector<HTMLInputElement>('#password').value;
// Can force TS to accept input exists by using !
// const message = document.querySelector<HTMLInputElement>('#message')!.value;
// Writing a generic. T is a standing for the type of whatever is passed
const identity = <T>(item: T): T => {
  return item;
};
// So this is OK! TS sees it as identity<boolean>(item: boolean): boolean
console.log(identity<boolean>(true));
// Another generic...
const getRandomElement = <T>(list: T[]): T => {
  return list[Math.floor(Math.random() * list.length)];
};
// This will work...
console.log(getRandomElement<number>(arr1));
// ...and this will work. Infers number array but will infer any type
console.log(getRandomElement(arr2));
// NB. In jsx you need to add a trailing comma so it knows it's not HTML
// Generics can have multiple params
// Extends keywords allows us to be more specific about what to accept
const merge = <T extends object, U extends object>(
  object1: T,
  object2: U
): T & U => {
  return {
    ...object1,
    ...object2
  };
};

const obj1 = {
  name: 'Dan',
  age: 37
};

const obj2 = {
  employed: false
};
//Won't work
console.log(merge(obj1, 9));
// Will work
console.log(merge(obj1, obj2));
// Default values
const makeEmptyArray = <T = number>(): T[] => {
  return [];
};
// Array will be empty, but still have a TS type
const numArr = makeEmptyArray();
// numArr: number[]
console.log(numArr);

// ====================================================
// TYPE DECLARATIONS
// Working with 3rd party code
// ====================================================
