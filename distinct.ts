import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 2, 4, 6)
  .pipe(distinct())
  .subscribe(console.log);

// output: 1 2 3 4 5 6 
