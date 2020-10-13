import { endWith, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

const source = of('Hello', 'World');
// emit values at the end before source completion
source
.pipe(endWith('!'))
.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('completed')
);
// output
// Hello
// World
// !
// completed

// Compare to finalize
// finalize doesnt emit any value. Provided function will be executed after source completes
source
.pipe(finalize(() => console.log('!')))
.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('completed')
);
// Hello
// World
// completed
// !