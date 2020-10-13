import { from } from 'rxjs';
import { map } from 'rxjs/operators';

const source1 = from([1, 2, 3, 4, 5]);
// multiply each value by 2
source1.pipe(map(val => val * 2))
  .subscribe(val => console.log(val));
// output
// 2
// 4
// 6
// 8
// 10


const source2 = from([
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Chuck', age: 30 }
  ]);
// map each value and add canDrive property based on age
source2.pipe(
  map((val: any) => {
    val.age > 10 ? val.canDrive = true : val.canDrive = false;
    return val;
  })
).subscribe(val => console.log(val));
// output
// {name: "Alice", age: 10, canDrive: false}
// {name: "Bob", age: 20, canDrive: true}
// {name: "Chuck", age: 30, canDrive: true}