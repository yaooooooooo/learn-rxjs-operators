import { range , from} from 'rxjs';
import { scan } from 'rxjs/operators';

// emit 1 to 5 numbers
const source = range(1,5);
// add all numbers emitted by source and emit final sum
source.pipe(scan((acc, val) => acc + val))
  .subscribe(console.log);
//output:
// 1
// 3
// 6
// 10
// 15

const source2 = from(['H', 'e', 'l', 'l', 'o']);
// concatenate letters emitted by source and emit final word
source2.pipe(scan((acc, val) => acc + val))
  .subscribe(console.log);
//output:
// H
// He
// Hel
// Hell
// Hello