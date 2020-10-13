import { interval, of } from 'rxjs';
import { expand, take } from 'rxjs/operators';

const greet = () => of('Good Morning')
// greet 5 times
greet().pipe(
  expand(val => greet()),
  take(5)
).subscribe(console.log);
// output
// Good Morning
// Good Morning
// Good Morning
// Good Morning
// Good Morning


const addOne = (val) => of(val + 1)
// recursively add 1 for 5 times
addOne(0).pipe(
  expand(val => addOne(val)),
  take(5)
).subscribe(console.log);
// output
// 1
// 2
// 3
// 4
// 5