import { timer, interval } from 'rxjs';
import { windowTime, scan, mergeAll, tap, bufferTime } from 'rxjs/operators';

// emit immediately then every 1s
const source = timer(0, 1000)
source.pipe(
    windowTime(3000),
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



 
// Compared to windowTime, bufferTime emits an array where as windowTime emits an inner observable
source.pipe(
    bufferTime(3000),
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