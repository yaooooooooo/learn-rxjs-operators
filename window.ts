import { timer, interval } from 'rxjs';
import { window, scan, mergeAll, tap, buffer, take } from 'rxjs/operators';

// emit immediately then every 1s
const source = timer(0, 1000)
source.pipe(
    window(interval(3000)),
    tap(() => console.log('New Window')),
    mergeAll()
  )
  .subscribe(val => console.log(val));
// output
// New Window
// 0
// 1
// 2
// New Window
// 3
// 4
// 5
// New Window
// 6
// 7
// 8
// ...

// Compared to window, buffer emits an array where as window emits an inner observable
source.pipe(
    buffer(interval(3000)),
    tap(() => console.log('New Window'))
  )
  .subscribe(val => console.log(val));

// output
// New Window
// [0, 1, 2]
// New Window
// [3, 4, 5]
// New Window
// [6, 7, 8]