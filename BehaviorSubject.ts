import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(1);

// these 2 subscribers will get initial value and any value emitted after
subject.subscribe((val) => console.log('subscriber 1: ' + val));
subject.subscribe((val) => console.log('subscriber 2: ' + val));

subject.next(2);

// late subscriber will get the lastest value emitted and any value emitted after 
subject.subscribe((val) => console.log('subscriber 3: ' + val));

subject.next(3);

// output:
// subscriber 1: 1
// subscriber 2: 1
// subscriber 1: 2
// subscriber 2: 2
// subscriber 3: 2
// subscriber 1: 3
// subscriber 2: 3
// subscriber 3: 3