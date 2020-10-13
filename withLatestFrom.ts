import { withLatestFrom, map } from 'rxjs/operators';
import { interval } from 'rxjs';

//emit every 5s
const anotherSource = interval(5000);
//emit every 1s
const source = interval(1000);

// take latest from another source evertime source emits
// atleast one value should be emitted by both sources before it emits any value
source.pipe(
  withLatestFrom(anotherSource),
  map(([first, second]) => {
    return `Source: ${first} Another Source: ${second}`;
  })
).subscribe(val => console.log(val));
// output:
// Source: 4 Another Source: 0
// Source: 5 Another Source: 0
// Source: 6 Another Source: 0
// Source: 7 Another Source: 0
// Source: 8 Another Source: 0
// Source: 9 Another Source: 1
// Source: 10 Another Source: 1
// Source: 11 Another Source: 1
// Source: 12 Another Source: 1
// Source: 13 Another Source: 1
// Source: 14 Another Source: 2
// ....