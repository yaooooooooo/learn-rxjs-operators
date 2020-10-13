import { of, range } from 'rxjs';
import { takeLast } from 'rxjs/operators';

// emit numbers from 1 to 10
const source = range(1, 10);
// take the last 2 emitted values and then completes
source.pipe(takeLast(2))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('completes')
  );
// output: 9 10
// completes