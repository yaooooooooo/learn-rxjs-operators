import { of } from 'rxjs';

//emits provided values in sequence
of(1, 2, 3, 4, 5).subscribe(val => console.log(val));
//output: 1,2,3,4,5

of([1, 2, 3, 4, 5]).subscribe(val => console.log(val));
//output: [1,2,3,4,5]

of(1, 2, [ 3, 4, 5], {name: 'bob'}).subscribe(val => console.log(val));
//output: 1 2 [3,4,5] {name: 'bob'}

