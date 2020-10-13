import { interval, from } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

// emits a number every second in sequence
const source = interval(1000);
//skip emitted values from source while value is less than 5
source.pipe(skipWhile(val => val < 5))
  .subscribe(val => console.log(val));
// output: 5 6 7 8 9 ......


const sourceFrom = from([1,2,3,4,1,2,3,4,5]);
// once condition becomes false, emits all values irrespective of the condition
sourceFrom.pipe(skipWhile(val => val < 3))
  .subscribe(val => console.log(val));

// output: 3 4 1 2 3 4 5