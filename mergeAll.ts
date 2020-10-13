import { take, mergeAll, delay } from 'rxjs/operators';
import { of, from } from 'rxjs';

const source1 = of('Jan').pipe(delay(2000));
const source2 = of('Feb');
const source3 = of('March').pipe(delay(3000));
//emit three observables
const source = from([source1, source2, source3]);
// subscribes to all observable and emit values from one as they emit
source.pipe(mergeAll())
  .subscribe(val => console.log(val));
// output: 
// Feb
// Jan
// March
