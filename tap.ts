import { of } from 'rxjs';
import { tap, map, delay } from 'rxjs/operators';

const source = of(1, 2);
// log values using tap with out modifiying the values
source.pipe(
  tap(val => console.log('before: ', val)),
  map((val => val * 2)),
  tap(val => console.log('after: ', val)),
).subscribe(val => console.log(val));
// output
// before: 1
// after: 2
// 2
// before: 2
// after: 4
// 4


// delay greeting by 2 seconds and log datetime before and after emission using tap
of('Hello World!')
  .pipe(tap(() => console.log(new Date())))
  .pipe(delay(2000))
  .pipe(tap(() => console.log(new Date())))
  .subscribe(val => console.log(val));
// output:
// 2020-06-01T23:50:28.256Z
// 2020-06-01T23:50:30.257Z
// Hello World!