import { fromEvent, of, interval } from 'rxjs';
import { mergeMap, delay, take, mapTo } from 'rxjs/operators';


const source = interval(1000).pipe(take(5));
const request = (val) => interval(1000 * val).pipe(take(5), mapTo(val));

// maps each value emitted by source to a request(inner observable)
// subscribes to inner observables immediately and emit values as any inner observable emits
// there is no order in subscribing to inner observables and values emitted by them
source.pipe(
   mergeMap((val) => request(val))
  ).subscribe(val => console.log('For source value: '+ val));
// output
// For source value: 0
// For source value: 0
// For source value: 0
// For source value: 0
// For source value: 0
// For source value: 1
// For source value: 1
// For source value: 1
// For source value: 2
// For source value: 1
// For source value: 1
// For source value: 2
// For source value: 3
// For source value: 4
// For source value: 2
// For source value: 3
// For source value: 2
// For source value: 4
// For source value: 2
// For source value: 3
// For source value: 3
// For source value: 4
// For source value: 3
// For source value: 4
// For source value: 4