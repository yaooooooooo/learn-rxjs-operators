import { of } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

//emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
//allow values until value from source is greater than 4, then complete
source
  .pipe(takeWhile(val => val <= 4))
  .subscribe(val => console.log(val));
// output: 1 2 3 4

// allow values until value from source is greater than 4, 
// and also the value that completes it by making the condition false
source
  .pipe(takeWhile(val => val <= 4, true))
  .subscribe(val => console.log(val));
// output: 1 2 3 4 5