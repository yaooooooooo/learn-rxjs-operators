import { interval, timer } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

// emits a number in sequence every second
const source = interval(1000);
// // collect value emitted by source in an array for 5 sec and emit that array
source.pipe(
  bufferTime(5000)
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
)
// output:
// [0, 1, 2, 3]
// [4, 5, 6, 7, 8]
// [9, 10, 11, 12, 13]
// ...