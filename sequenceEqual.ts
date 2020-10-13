
import { from, fromEvent, of } from 'rxjs';
import { sequenceEqual, map, bufferCount, mergeMap, tap } from 'rxjs/operators';

const verfificationCodeSequence = [1,2,3,4];
const expectedSequence = from(verfificationCodeSequence);

const userAttempts = of([1, 1, 2, 3], [1, 2, 3, 3], [1, 2, 3, 4]);
// use fromEvent(document, 'keydown') and bufferCount operator to get user attempt in real world
userAttempts.pipe(
    mergeMap(attempt =>
      from(attempt).pipe(
        sequenceEqual(expectedSequence),
        map(matched => matched ? 'MATCHED!' : 'TRY AGAIN!')
      )
    )
  )
  .subscribe(e => console.log(e));
// output:
// TRY AGAIN!
// TRY AGAIN!
// MATCHED!

