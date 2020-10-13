import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const source$ = from([
  {id: 1, name: 'Alice'},
  {id: 2, name: 'Alice'},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Bob'},
  {id: 5, name: 'Alice'}
]);
source$
  .pipe(distinctUntilKeyChanged('name'))
  .subscribe(console.log);
  // output:
  // {id: 1, name: 'Alice'}
  // {id: 3, name: 'Bob'}
  // {id: 5, name: 'Alice'}