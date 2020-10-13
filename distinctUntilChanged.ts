import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const source1$ = from([1, 1, 2, 3, 3, 2]);

source1$
  .pipe(distinctUntilChanged())
  .subscribe(console.log);
  // output: 1 2 3 2


const source2$ = from([
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Alice'},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Bob'},
  {id: 5, name: 'Alice'}
]);
source2$
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  .subscribe(console.log);
  // output:
  // {id: 1, name: 'Alice'}
  // {id: 3, name: 'Bob'}
  // {id: 5, name: 'Alice'}