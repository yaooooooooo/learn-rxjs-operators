import { forkJoin, of, from, throwError } from 'rxjs';
import { delay, take, } from 'rxjs/operators';


const source1 = of(1, 2, 3);
const source2 = of(4, 5, 6).pipe(delay(1000));
const source3 = from(['How', 'Are', 'You'])

// wait for all observables to complete, then emit only last value from each observable 
forkJoin(
  source1,
  source2,
  source3
).subscribe(val => console.log(val));
// output: [3, 6, "You"]

// forkJoin emits only when all observables completes successfully.
// if any one errors out, it will error out
const source4 = throwError('Error')
forkJoin(
  source1,
  source2,
  source3,
  source4
).subscribe(
  val => console.log(val),
  err => console.log(err)
);
// output: Error