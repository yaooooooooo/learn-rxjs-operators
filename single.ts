import { from } from 'rxjs';
import { single } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
source.pipe(single(x => x == 2)).subscribe(
  val => console.log(val),
  err => console.log('error: ' + err)
);
// output: 
// 2

// emits undefined when no item was emitted that satisfies the condition
source.pipe(single(x => x == 10)).subscribe(
  val => console.log(val),
  err => console.log('error: ' + err)
);
// output: 
// undefined


// errors out when more than one satisfies the condition
source.pipe(single(x => x > 2)).subscribe(
  val => console.log(val),
  err => console.log('error: ' + err)
);
// output: 
// error: Sequence contains more than one element

// errors out when more than one satisfies the condition
source.pipe(single()).subscribe(
  val => console.log(val),
  err => console.log('error: ' + err)
);
// output: 
// error: Sequence contains more than one element

// errors out when more than one satisfies the condition
const source2 = from([1, 2, 2, 2, 5]);
source2.pipe(single(x => x == 2)).subscribe(
  val => console.log(val),
  err => console.log('error: ' + err)
);
// output: 
// error: Sequence contains more than one element