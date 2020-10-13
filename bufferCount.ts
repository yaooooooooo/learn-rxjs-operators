import { fromEvent, interval, timer } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

// emits a number in sequence every second
const source = interval(1000);
// collect 5 value emitted by source in an array and then emit that array and start buffer again
source.pipe(
  bufferCount(5)
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
)
// output: 
// [0, 1, 2, 3, 4]
// [5, 6, 7, 8, 9]
// [10, 11, 12, 13, 14]
// ...

// WITH 'startBufferEvery'
// collect 5 value emitted by source in an array and then emit that array but start the next array buffer after collecting 3 values in the previous array
source.pipe(
  bufferCount(5,3)
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
)
// output: 
// [0, 1, 2, 3, 4]
// [3, 4, 5, 6, 7]
// [6, 7, 8, 9, 10]
// [9, 10, 11, 12, 13]
// [12, 13, 14, 15, 16]
// [15, 16, 17, 18, 19]
// ...