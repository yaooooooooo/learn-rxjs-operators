import { from } from 'rxjs';
import { last } from 'rxjs/operators';

const source = from([1, 2, 3, 4, 5]);
const example1 = source.pipe(last());
const subscribe1 = example1.subscribe(val => console.log(val));
// output: 5

const example = source.pipe(last((num) => num > 0 && num < 5));
const subscribe = example.subscribe(val => console.log(val));
// output: 4
