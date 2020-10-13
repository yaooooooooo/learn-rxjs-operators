import { of } from 'rxjs';
import { timeoutWith, delay } from 'rxjs/operators';

const sourceObservable = of('Source Observable').pipe(delay(3000));
const anotherObservable = of('Source timed out. I am from another observable');

// subscribe to another observable if source observable does not emit in 2 seconds
sourceObservable.pipe(timeoutWith(2000, anotherObservable))
  .subscribe(console.log);
// output
// Source timed out. I am from another observable