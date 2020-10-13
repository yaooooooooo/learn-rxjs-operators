import { interval, of, from, range } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

range(1,5)
  .pipe(toArray())
  .subscribe(console.log);
// output:
// [1, 2, 3, 4, 5]

interval(1000)
  .pipe(take(5), toArray())
  .subscribe(console.log);
// output:
// [0, 1, 2, 3, 4]

from([1,2,3,4,5])
  .pipe(toArray())
  .subscribe(console.log);
// output:
// [1, 2, 3, 4, 5]

of([1,2], [3,4], [4,5])
  .pipe(toArray())
  .subscribe(console.log);
// output:
// [[1,2], [3,4], [4,5]]
