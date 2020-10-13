import { Subject, throwError, ReplaySubject, interval, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const subject1 = new Subject();

subject1.next(1);
subject1.next(2);
subject1.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')   
);
subject1.next(3);
subject1.next(4);
subject1.complete();
// output: above Subject subscriber never get 1 and 2 as it subscribed after those value were emitted
// 3
// 4
// complete


const subject2 = new ReplaySubject();

subject2.next(1);
subject2.next(2);
subject2.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')   
);
subject2.next(3);
subject2.next(4);
subject2.complete();
// output: above ReplaySubject subscriber gets even 1 and 2 even though it subscribed after those value were emitted
// 1
// 2
// 3
// 4
// complete

// Specify number of old values to emit to new subscribers
const subject3 = new ReplaySubject(2);

subject3.next(1);
subject3.next(2);
subject3.next(3);
subject3.next(4);
subject3.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')   
);
subject3.next(5);
subject3.next(6);
subject3.complete();
// output
// 3
// 4
// 5
// 6
// complete


// emit 3 old values that were emitted with in the past 2 second before subscription
const subject4 = new ReplaySubject(3, 2000);

// ReplaySubject emits a value every second as interval emits
interval(1000).subscribe((val) => subject4.next(val));
subject4.subscribe(
    val => console.log('Early Subscriber: '+ val),
    err => console.log(err),
    () => console.log('complete')   
  );
// subscribe to ReplaySubject after 5 seconds
timer(5000).subscribe(() => {
  subject4.subscribe(
    val => console.log('Late Subscriber: ' + val),
    err => console.log(err),
    () => console.log('complete')   
  );
})
// output: only 1 value was emitted with in 2 sec before subscription i.e 3
// Early Subscriber: 0 - 1 sec
// Early Subscriber: 1 - 2 sec
// Early Subscriber: 2 - 3 sec
// Early Subscriber: 3 - 4 sec
// Early Subscriber: 4 - 5 sec
// Late Subscriber: 3 - past 2 sec from 5th sec, between 3 - 5 sec only value 3 is emitted
// Late Subscriber: 4 - 5 sec
// Early Subscriber: 5
// Late Subscriber: 5
// Early Subscriber: 6
// Late Subscriber: 6
// Early Subscriber: 7
// Late Subscriber: 7
// Early Subscriber: 8
// Late Subscriber: 8
// ...