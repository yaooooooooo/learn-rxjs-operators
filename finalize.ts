import { of } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

// use finalize to do action after source completes or error out
const source = of(1,2,3,4,5);
source.pipe(
  finalize(() => console.log('After completion task here!'))
).subscribe(val => console.log(val));

// output:
// 1
// 2
// 3
// 4
// 5
// After completion task here!