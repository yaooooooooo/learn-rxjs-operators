import { interval, timer, BehaviorSubject, Subject, of } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

// emit numbers in sequesnce every 1 sec 
const source = interval(1000);
// wait 5 sec to emit value
const timer$ = timer(5000);
// emit until timer$ emits a value
source.pipe(takeUntil(timer$))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('completes')
  );
// output: 
// 0 1 2 3 completes