import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const source$ = from([
  {id: 1, name: 'Alice', role: 'admin'},
  {id: 2, name: 'Bob', role: 'user'},
  {id: 3, name: 'Chuck', role: 'user'}
]);
source$
  .pipe(filter((val) => val.role === 'user' ))
  .subscribe(console.log);
// output: 
// {id: 2, name: "Bob", role: "user"}
// {id: 3, name: "Chuck", role: "user"}