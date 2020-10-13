import { Subject } from 'rxjs';

const subject1 = new Subject();

subject1.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')  
);

subject1.next(1);
subject1.next(2);
subject1.next(3);
subject1.complete();
// output
// 1
// 2
// 3
// complete


const subject2 = new Subject();

subject2.next(1);
subject2.next(2);
subject2.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')   
);
subject2.next(3);
subject2.next(4);
subject2.error('error!');
// output: above subject2 subscriber never get 1 and 2 as it subscribed after those value were emitted
// 3
// 4
// error!

// creating a new observable from a subject with subject as its source
const subject3 = new Subject();
const source3Observable = subject3.asObservable();
source3Observable.subscribe(
  val => console.log('subscriber 1: ',val),
  err => console.log(err),
  () => console.log('complete')   
);
subject3.next(1);
subject3.next(2);

source3Observable.subscribe(
  val => console.log('subscriber 2: ',val),
  err => console.log(err),
  () => console.log('complete')   
);
subject3.next(3);
subject3.next(4);
subject3.complete();
// output
// subscriber 1:
// 1
// subscriber 1:
// 2
// subscriber 1:
// 3
// subscriber 2:
// 3
// subscriber 1:
// 4
// subscriber 2:
// 4
// complete
// complete
