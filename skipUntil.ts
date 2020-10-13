import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

const source = interval(1000);
// skip emitted values from source for 6 sec (until provided observable emits)
source.pipe(skipUntil(timer(6000)))
  .subscribe(val => console.log(val)); 
// output: 5 6 7 8 9 ...