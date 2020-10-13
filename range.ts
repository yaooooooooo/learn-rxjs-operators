import { range } from 'rxjs';

//emit numbers in sequence from 1 to 10
range(1, 10).subscribe(val => console.log(val));
//output: 1,2,3,4,5,6,7,8,9,10
