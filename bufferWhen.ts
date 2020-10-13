import { interval, timer } from 'rxjs';
import { bufferWhen } from 'rxjs/operators';

const source = interval(1000);
const closing = () => timer(3000);
// closing: close the buffer every 3 sec
source.pipe(
  bufferWhen(closing)
).subscribe(val =>
  console.log(val)
);
// output
// [0, 1]
// [2, 3, 4, 5]
// [6, 7, 8]
// [9, 10, 11]
// [12, 13, 14]
// [15, 16, 17]
// [18, 19, 20]
// ...