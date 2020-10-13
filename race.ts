import { mapTo, delay } from 'rxjs/operators';
import { interval, race, of } from 'rxjs';

// emit the value from first observable that emits
race(
  of('2st place').pipe(delay(2000)),
  of('1st place').pipe(delay(1000)),
  of('3rd place').pipe(delay(3000))
).subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('completes')
);
// output: 
// 1st place
// completes