import { timer, interval } from 'rxjs';
import { windowCount, scan, mergeAll, tap, buffer, take, bufferCount } from 'rxjs/operators';

// emit immediately then every 1s
const source = timer(0, 1000)
source.pipe(
    windowCount(3),
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



 
// Compared to windowCount, bufferCount emits an array where as window emits an inner observable
source.pipe(
    bufferCount(3),
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