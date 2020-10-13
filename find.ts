import { from } from 'rxjs';
import { find } from 'rxjs/operators';

const source$ = from([
  {id: 1, name: 'Alice', role: 'admin'},
  {id: 2, name: 'Bob', role: 'user'},
  {id: 3, name: 'Chuck', role: 'user'}
]);
source$
  .pipe(find((val) => val.role === 'user' ))
  .subscribe(
    (val) => console.log(val),
    (err) => console.log(err),
    () => console.log('complete')
  );
// output:
// {id: 2, name: 'Bob', role: 'user'}
// complete