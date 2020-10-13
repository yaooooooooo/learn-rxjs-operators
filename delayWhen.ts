import { interval, timer, of } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

// delay greeting until inner observable emits( after 5sec )
of('Hello World').pipe(delayWhen(() => timer(5000)))
  .subscribe(val => console.log(val));
// output: after 5 sec
//  'Hello World'
