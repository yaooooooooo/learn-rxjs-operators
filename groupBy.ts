import { of } from 'rxjs';
import { mergeMap, groupBy, toArray } from 'rxjs/operators';
 
of(
  { name: 'Alice', occupation: 'developer'},
  { name: 'Bob', occupation: 'teacher'},
  { name: 'Alex', occupation: 'teacher'},
  { name: 'Ben', occupation: 'developer'},
  { name: 'Kim', occupation: 'farmer'},
).pipe(
  groupBy(p => p.occupation),
  mergeMap((group) => group.pipe(toArray())),
)
.subscribe(p => console.log(p));
// output
// [{ name: 'Alice', occupation: 'developer'}, { name: 'Ben', occupation: 'developer'}]
// [{ name: 'Bob', occupation: 'teacher'}, { name: 'Alex', occupation: 'teacher'}]
// [{ name: 'Kim', occupation: 'farmer'}]