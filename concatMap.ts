import { of, from, timer } from "rxjs";
import { delay, concatMap, tap, take } from "rxjs/operators";


// to keep track of no of seconds elapsed
timer(0, 1000).pipe(tap((val) => console.log(`After ${val} seconds`)), take(6)).subscribe();

const source1 = from([3,2,1]);
// map source to new inner observable that emits with the delay based on source value
source1.pipe(
  concatMap((val) => of(val).pipe(delay(1000*val)))
).subscribe(console.log);
// output: concatMap ensures the order. Inner observable created by 1st value from source should complete before it goes to next inner observable. Make sure every inner observable completes else it won't subscribe to next one
// After 0 seconds
// After 1 seconds
// After 2 seconds
// 3
// After 3 seconds
// After 4 seconds
// 2
// After 5 seconds
// 1