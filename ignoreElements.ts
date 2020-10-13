import { of } from 'rxjs';
import { ignoreElements } from 'rxjs/operators';
 
of('Hello', 'How are you!').pipe(
  ignoreElements(),
)
.subscribe(
  val => console.log(val),
  err => console.log(err),
  () => console.log('Ignored'),
);
// result:
// Ignored