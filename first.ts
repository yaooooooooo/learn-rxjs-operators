import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
source.pipe(first())
.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('complete')
);
// output: 1