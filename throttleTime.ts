import { interval } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

//emit a number in sequence every 1 second
const source = interval(1000);
//ignore all values for 2 seconds, after an emit and repeat
source.pipe(throttleTime(2000))
  .subscribe(val => console.log(val));
// output: 0 3 6 9 12....