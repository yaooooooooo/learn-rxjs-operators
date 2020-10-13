import { fromEvent, interval, of } from 'rxjs';
import { exhaustMap, take, tap, delay } from 'rxjs/operators';

// emit 10 values in sequence every second
const source = interval(1000).pipe(take(10), tap((val) => console.log('Source Interval Value: ' + val)));
// ignore values emitted by source until previous inner observable completes (3 sec delay)
source.pipe(
  exhaustMap(val => of('Request complete for source value: ' + val ).pipe(delay(3000)))
).subscribe(console.log)
// output:
// Source Interval Value: 0
// Source Interval Value: 1
// Source Interval Value: 2
// Source Interval Value: 3
// Request complete for source value: 0
// Source Interval Value: 4
// Source Interval Value: 5
// Source Interval Value: 6
// Source Interval Value: 7
// Request complete for source value: 4
// Source Interval Value: 8
// Source Interval Value: 9
// Request complete for source value: 8


//  FROM OFFICIAL DOCS
// emit 5 values when user clicks
// map each click to an interval that emit 5 value and then completes
// ignores click while previous click mapped interval is still emitting and not completed yet
const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  exhaustMap(ev => interval(1000).pipe(take(5)))
);
result.subscribe(x => console.log(x));