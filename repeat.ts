import { repeat } from 'rxjs/operators';
import { of } from 'rxjs';

// repeat hello worl 3 times
of('Hello World!')
  .pipe(repeat(3))
  .subscribe(console.log);
// output:
// Hello World!
// Hello World!
// Hello World!
