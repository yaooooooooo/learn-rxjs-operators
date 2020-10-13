import { mapTo, take } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

//emit every 1 seconds
const source1 = interval(1000).pipe(mapTo('ONE'), take(3));
//emit every 3 seconds
const source2 = interval(3000).pipe(mapTo('TWO'), take(3));
//emit every 2 seconds
const source3 = interval(2000).pipe(mapTo('THREE'), take(3));

//merges all observables and emits value from one of the observable
merge(
  source1,
  source2,
  source3
).subscribe(val => console.log(val));
// output:
// ONE
// ONE
// THREE
// ONE
// TWO
// THREE
// TWO
// THREE
// TWO