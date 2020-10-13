import { generate } from 'rxjs';

generate(
  0, // initial value
  x => x < 10, // condition
  x => x + 1, // iterator function
  x => x // result selector
).subscribe((x) => console.log(x));
// output: 0 1 2 3 4 5 6 7 8 9