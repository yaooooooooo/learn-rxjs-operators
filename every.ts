import { of } from 'rxjs';
import { every } from 'rxjs/operators';

const isEven = num => num%2 === 0;
 of(1, 2, 3, 4, 5, 6).pipe(
    every(x => isEven(x)) // check if all numbers are even
)
.subscribe(x => console.log(x));
// output: false