import { interval } from 'rxjs';

// emit numbers in sequence from 0 for every sec
// first value (0) will be emitted after 1 sec (specified interval) but not immediately
interval(1000).subscribe(val => console.log(val));
// output: 0 1 2 3 4 ....