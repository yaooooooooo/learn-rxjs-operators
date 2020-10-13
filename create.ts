import { Observable } from 'rxjs';

const fruits = ['apple', 'orange', 'mango', 'banana']
const fruitsObservable = Observable.create((observer) => {
  fruits.forEach(fruit => observer.next(fruit))
  observer.complete();
});

const subscribe = fruitsObservable.subscribe(val => console.log(val));
//output: 
// apple 
// orange
// mango
// banana
