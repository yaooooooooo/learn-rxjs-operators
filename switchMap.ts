import { interval, fromEvent, timer, of } from 'rxjs';
import { switchMap, delay, mapTo } from 'rxjs/operators';

// emit after 1 sec and every 5 sec after
const source = timer(1000, 5000);
// restart counter every 5 sec (every time source emits)
source.pipe(switchMap(() => interval(1000)))
  .subscribe(console.log);
// output:
// 0 
// 1
// 2
// 3
// 0 -- start again
// 1
// 2
// 3
// 0 -- start again
// 1
// 2
// 3
// 0 -- start again
// ...


// restart counter on every click
fromEvent(document, 'click')
  .pipe(switchMap(() => interval(1000)))
  .subscribe(console.log);
