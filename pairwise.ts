import { pairwise, take } from 'rxjs/operators';
import { interval } from 'rxjs';

interval(1000)
  .pipe(pairwise(), take(5))
  .subscribe(console.log);
// output
// [0, 1]
// [1, 2]
// [2, 3]
// [3, 4]
// [4, 5]