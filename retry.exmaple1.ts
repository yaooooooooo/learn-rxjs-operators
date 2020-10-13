/**
 * Eample from official docs 
 * https://rxjs.dev/api/operators/retry
 * 
 * All items will be emitted again for every retry even those emitted during failure case
 */

import { interval, of, throwError } from 'rxjs';
import { mergeMap, retry, tap } from 'rxjs/operators';

const source = interval(1000);
const example = source.pipe(
  mergeMap(val => {
    if(val > 5){
      return throwError('Error!');
    }
    return of(val);
  }),
  //retry 2 times on error
  retry(2)
);
 
const subscribe = example.subscribe({
  next: val => console.log(val),
  error: val => console.log(`${val}: Retried 2 times then quit!`)
});
 
// Output:
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// 0..1..2..3..4..5..
// "Error!: Retried 2 times then quit!"