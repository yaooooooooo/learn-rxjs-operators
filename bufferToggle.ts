import { interval, timer, of } from 'rxjs';
import { bufferToggle, windowToggle, mergeAll, tap } from 'rxjs/operators';

const source = interval(1000);
const opening = timer(0, 5000);
const closing = val =>  timer(3000);
// opening: start a new buffer every 5 sec after, 
// closing: close the buffer after 3 sec
// source.pipe(
//   windowToggle(opening, closing),
//   tap(() => console.log('New Window')),
//   mergeAll()
// ).subscribe(val =>
//   console.log(val)
// );
// output
// New Window
// 0
// 1
// 2
// New Window
// 5
// 6
// 7
// New Window
// 10
// 11
// 12
// ...

// Compared to windowToggle, bufferToggle emits an array where as windowToggle emits an inner observable
source.pipe(
  bufferToggle(opening, closing),
  tap(() => console.log('New Window')),
).subscribe(val =>
  console.log(val)
);
// output
// New Window
// [0, 1, 2]
// New Window
// [5, 6, 7]
// New Window
// [10, 11, 12]
// ...