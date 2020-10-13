import { of, interval, range } from 'rxjs';
import { concatMapTo, delay, take } from 'rxjs/operators';

// emit 1 to 5 values
const source = range(1,5);
const request = of('Request complete').pipe(delay(2000));
// map every value emitted by source to the same observable 
// maintain the order of subscription. Wait for previous one to complete before subscribing to next one
source.pipe(concatMapTo(request))
  .subscribe(val => console.log(val));
// output: 
// Request complete
// Request complete
// Request complete
// Request complete
// Request complete