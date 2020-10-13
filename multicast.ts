import { of, Subject } from 'rxjs';
import { delay, tap, map, share, multicast } from 'rxjs/operators';

// emit a random number when subscribed to
const source = of(1).pipe(map(() => Math.random()));

// with out multicast
source.subscribe(val => console.log(
   "Subscriber one: "+val)
);
source.subscribe(val => console.log(
   "Subscriber Two: "+val)
);
// output: both subscribers get diiferent value
// Subscriber one: 0.16860650460233995
// Subscriber Two: 0.1436190488919722

// with multicast
const sharedSource = source.pipe(multicast(() => new Subject()))
sharedSource.subscribe(val => console.log(
   "Subscriber one: "+val)
);
sharedSource.subscribe(val => console.log(
   "Subscriber Two: "+val)
);
sharedSource.connect();

// output: both subscribers get same value
// Subscriber one: 0.849020142380277
// Subscriber Two: 0.849020142380277