import { fromEvent, interval, timer } from 'rxjs';
import { buffer } from 'rxjs/operators';

// emits a number in sequence every second
const source = interval(1000);
// collect numbers emitted in an array for 5 sec and then emit that array and complete
source.pipe(
  buffer(timer(5000))
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
)
// output: 
// [0, 1, 2, 3]
// complete

// emits a number in sequence every 6 seconds
const source2 = interval(6000);
// collect numbers emitted in an array for 5 sec.
// If nothing was emitted by source before provided observable emits, emit an empty array
source2.pipe(
  buffer(timer(5000))
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
)
// output: 
// []
// complete