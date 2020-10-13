import { interval, timer, BehaviorSubject, Subject, of } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';

// Difference between takeWhile and takeUntil

const subject = new Subject();
let complete$ = subject.asObservable();
let isActive = true;
// emit after 1sec and for every 5 sec after
const source2 = timer(1000, 5000);
// emit after 2 sec and for every 1 sec after
timer(2000, 1000).subscribe((val) => {
  console.log(`After ${val+2} sec`);
  isActive = false;
  subject.next(false)
});

// take until complete$ immediately when notifier observable emits
// so it completes immediately after 3 sec when subject emits next value
source2.pipe(takeUntil(complete$))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('completes')
  );

// output
// 0
// After 2 sec
// completes

// takeWhile check provided function return value for every value source emits and emit if it is true else completes when it first encounter false value. So it needs extra emit from source to complete
// so it doesn't complete immediately after 2 sec when isActive is made false but complete after 5 seconds when source emit a new value
source2.pipe(takeWhile(() => isActive))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('completes')
  );

// output
// 0
// After 2 sec
// After 3 sec
// After 4 sec
// After 5 sec
// completes