import { from } from 'rxjs';

// Observable from an array
const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe(val => console.log(val));
//output: 1 2 3 4 5

// Observable from an iterable
const map = new Map();
map.set(1, 'Alice');
map.set(2, 'Bob');

const iterableSource = from(map);
iterableSource.subscribe(val => console.log(val));
//output: [1, 'Alice']  [2, 'Bob']

// Convert promise into an observable
const promise = new Promise(resolve => resolve('Welcome to RxJs!'));
const promiseSource = from(promise);
promiseSource.subscribe(val => console.log(val));
//output: 'Welcome to RxJs!'
