
import { from } from 'rxjs';
import { skip } from 'rxjs/operators';

const source = from([1,2,3,4,5,6,7,8,9,10]);
//skip first 5 values
source.pipe(skip(5)).subscribe(val => console.log(val));
//output:  
// 6
// 7
// 8
// 9
// 10