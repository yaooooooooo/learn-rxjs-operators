import { zip, of, from, throwError } from 'rxjs';
import { delay, take, } from 'rxjs/operators';


const source1 = of(1, 2, 3);
const source2 = of(4, 5, 6).pipe(delay(1000));
const source3 = from(['How', 'Are', 'You'])

// wait for all observables to emit each round, then emit value from each observable in that round as an array. 
zip(
  source1,
  source2,
  source3
).subscribe(val => console.log(val));
// output: 
// [1, 4, "How"]
// [2, 5, "Are"]
// [3, 6, "You"]

// 3rd values from source1 and source2 are never emitted as source4 doesn't have and never emits 3rd value
const source4 = from(['How', 'Are'])
zip(
  source1,
  source2,
  source4
).subscribe(val => console.log(val));
// output: 
// [1, 4, "How"]
// [2, 5, "Are"]

// zip emits only when all observables emit atleast one value successfully.
// if any one errors out, it will error out
const source5 = throwError('Error')
zip(
  source1,
  source2,
  source3,
  source5
).subscribe(
  val => console.log(val),
  err => console.log(err)
);
// output: Error