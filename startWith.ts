import { startWith } from 'rxjs/operators';
import { of } from 'rxjs';

const source = of('Hello', 'World');
// emit values at the end before source completion
source
.pipe(startWith('Start With'))
.subscribe(
  val => console.log(val)
);
// output
// Start With
// Hello
// World