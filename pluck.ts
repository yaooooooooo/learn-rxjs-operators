
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const source = from([
  { name: 'Alice', age: 21, address: { street: '12345 Js Street', zipcode: '12345'}},
  { name: 'Bob', age: 25, address: { street: '56789 Js Street', zipcode: '56789'}}
]);
// pluck name
source.pipe(pluck('name'))
.subscribe(val => console.log(val));
// output:
// Alice
// Bob

// pluck address
source.pipe(pluck('address'))
.subscribe(val => console.log(val));
// output:
// {street: "12345 Js Street", zipcode: "12345"}
// {street: "56789 Js Street", zipcode: "56789"}

// pluck street address
source.pipe(pluck('address', 'street'))
.subscribe(val => console.log(val));
// output:
// 12345 Js Street
// 56789 Js Street

// pluck phone number
source.pipe(pluck('phone'))
.subscribe(val => console.log(val));
// output:
// undefined
// undefined