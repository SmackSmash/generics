// Most basic generic types
const arr1: number[] = [1, 2, 3];
// Can be written as...
const arr2: Array<number> = [4, 5, 6];
// querySelector is also a geeric type
document.querySelector<HTMLElement>('root');
// Type inferred as Element | null
// TS does not know it will be an HTMLInputElement so value is flagged
const username = document.querySelector('#username').value;
// Fix by passing type to generic, but still not happy as could be null
const password = document.querySelector<HTMLInputElement>('#password').value;
// Can force TS to accept input exists by using !
const message = document.querySelector<HTMLInputElement>('#message')!.value;
