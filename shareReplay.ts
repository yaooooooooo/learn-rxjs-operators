import { of, Subject } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';

const subject1 = new Subject();
const source1 = subject1.pipe(map((val) => 'emit ' + val + ': ' + Math.random()));
// emit a number after 1 sec

// with out shareReply
source1.subscribe(val => console.log("Subscriber one: "+val));

// emit new value 
subject1.next(1);

source1.subscribe(val => console.log("Subscriber Two: "+val));
// emit 2nd value 

subject1.next(2);

// output: subscriber two never receives 1st emit as it subscribed to source late. And values are different for both subscribers for 2nd emit
// Subscriber one: emit 1: 0.49148828092038177
// Subscriber one: emit 2: 0.9954454219224065
// Subscriber Two: emit 2: 0.032383565460057495

// with shareReplay
const subject2 = new Subject();
// emit a number after 1 sec
const source2 = subject2.pipe(map((val) => 'emit ' + val + ': ' + Math.random()), shareReplay(1));

source2.subscribe(val => console.log("Subscriber One: "+val));

// emit 1st value 
subject2.next(1);

source2.subscribe(val => console.log("Subscriber Two: "+val));

// emit 2nd value 
subject2.next(2);

// output: subscriber 2 also receives 1st emit even though it subscribed late and both subscribers receive same value for every emit
// Subscriber One: emit 1: 0.13171605487577787
// Subscriber Two: emit 1: 0.13171605487577787
// Subscriber One: emit 2: 0.08844532897757573
// Subscriber Two: emit 2: 0.08844532897757573