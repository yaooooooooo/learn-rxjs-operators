import { fromEvent, of, interval, from, Observable, timer } from 'rxjs';
import { mapTo, mergeScan, scan, delay, take } from 'rxjs/operators';


const source = of(1,2,3).pipe(delay(1000));

// with scan
source.pipe(
  scan((acc, curr) => acc + curr, 0),
).subscribe(x => console.log('scan: ' + x));
// output
// scan: 1
// scan: 3
// scan: 6


const requestOne = (val) => of(val);
const requestTwo = (val) => of(val).pipe(delay(3000))
const requestThree = (val) => of(val).pipe(delay(1000))
const requests = [requestOne, requestTwo, requestThree];

// with mergeScan
// combination of mergeMap and scan
// mergeMap doesn't follow any order
// scan is used 2 reduce value and emit on every emit
source.pipe(
  mergeScan((acc, curr) =>{
    return requests[curr-1](acc+curr)
  } , 0),
).subscribe(x => console.log('Merge scan: ' + x));
// output
// Merge scan: 1 -- requestOne return 1 - so accumulated value is 0 + 1 = 1
// Merge scan: 4 -- requestThree returns before requestTwo - so accumulated value is 1 + 3 = 4
// Merge scan: 3 -- when requestTwo was subscribed, actual value was 1 - so accumulated value is 1 + 2 = 3

/**  ORDER OF EVENT AND RESULTS
-> after 1 sec - source value 1 mapped to requesOne and subscribed. requestOne responds with 1 immediately , so accumulated value is 0 + 1 = 1
-> after one more sec - sourc value 2 mapped to requestTwo and subscribed and wait for response(3 sec delay). Accumulated value at this time is 1
-> after one more sec - source value 3 mapped to requestThree and subscribes and wait for response( 1se delay). Accumulated value at this time is still 1
-> requestThree responds before requestTwo with value 3, so accumulated value is 1(previous acumulated value at the time requestThree is subscribed) + 3 = 4
-> requestTwo responds now with value 2. so accumulated value is 1(acumulated value at the time requestTwo is subscribed) + 2 = 3
*/