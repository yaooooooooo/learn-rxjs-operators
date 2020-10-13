import { from } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const source1 = from([1, 2, 3, 4, 5]);
// emit 'Hello World' instead of actual value
source1.pipe(mapTo('Hello World'))
  .subscribe(val => console.log(val));
// output
// Hello World
// Hello World
// Hello World
// Hello World
// Hello World