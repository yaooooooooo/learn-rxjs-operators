import { timer } from 'rxjs';

//emit first value after 1 second and subsequent values every 2 seconds after
const source = timer(1000, 2000);
source.subscribe(val => console.log(val));
//output: 0,1,2,3,4,5......
