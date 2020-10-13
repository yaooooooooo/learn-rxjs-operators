import { take, concatAll, delay } from 'rxjs/operators';
import { of, from } from 'rxjs';

const source1 = of('Jan').pipe(delay(2000));
const source2 = of('Feb');
const source3 = of('March');
//emit three observables
const source = from([source1, source2, source3]);
// subscribe to each inner observable in the order, when the previous one completes
// subscribes to source1, wait 2sec for it to complete and emit, then subscribe to source2 and then source3
source.pipe(concatAll())
  .subscribe(val => console.log(val));
// output: 
// Jan 
// Feb
// March