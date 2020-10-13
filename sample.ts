import { interval } from 'rxjs';
import { sample } from 'rxjs/operators';

//emit value every 1s
const source = interval(1000);
// get sample value from source every 2 seconds
source
.pipe(sample(interval(2000)))
.subscribe(val => console.log(val));
//output: 1 3 5 7 9 ...
