import { interval, timer } from 'rxjs';
import { bufferWhen, windowWhen, mergeAll, tap } from 'rxjs/operators';

const source = interval(1000);
const closing = () => timer(3000);
// closing: close the buffer every 3 sec

source.pipe(
  windowWhen(closing),
  tap(() => console.log('New Window')),
  mergeAll()
).subscribe(val =>
  console.log(val)
);
// output
// New Window
// 0
// 1
// New Window
// 2
// 3
// 4
// 5
// New Window
// 6
// 7
// 8
// New Window
// 9
// 10
// 11
// ...

// Compared to windowWhen, bufferWhen emits an array where as windowWhen emits an inner observable
source.pipe(
  bufferWhen(closing),
  tap(() => console.log('New Window'))
).subscribe(val =>
  console.log(val)
);
// output
// New Window
// [0, 1]
// New Window
// [2, 3, 4, 5]
// New Window
// [6, 7, 8]
// New Window
// [9, 10, 11]
// New Window
// [12, 13, 14]
// New Window
// [15, 16, 17]
// New Window
// [18, 19, 20]
// ...