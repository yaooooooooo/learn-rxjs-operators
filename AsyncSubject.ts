import { AsyncSubject, interval } from 'rxjs';

const subject = new AsyncSubject();

// early subscribers
subject.subscribe((val) => console.log('subscriber 1: ' + val));
subject.subscribe((val) => console.log('subscriber 2: ' + val));

subject.next(1);
subject.next(2);

// late subscriber
subject.subscribe((val) => console.log('subscriber 3: ' + val));

subject.next(3);
subject.next(4);

// none of the subscribers will receive a value until AsyncSubject completes
// all subscribers receive the lastest value emitted upon completion
subject.complete();

// output:
// subscriber 1: 4
// subscriber 2: 4
// subscriber 3: 4


// AsyncSubject should complete in order for it to emit a value.
const subject2 = new AsyncSubject();
// early subscribers
subject2.subscribe((val) => console.log('subscriber 1: ' + val));
subject2.subscribe((val) => console.log('subscriber 2: ' + val));

interval(1000).subscribe((val) => subject2.next(subject2));

// late subscriber
subject2.subscribe((val) => console.log('subscriber 3: ' + val));
// output: none of the subscribers receive any value as subject2 never completes
