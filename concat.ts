
import { of, concat, interval } from 'rxjs';

const source1 = of(1, 2, 3);
const source2 = of(4, 5, 6);
const source3 = of(7, 8, 9);

// subscribe to each source in the order when the previous one completes
concat(
  source1,
  source2,
  source3
).subscribe(console.log);
// output: 1 2 3 4 5 6 7 8 9

const source4 = interval(1000);
// will never subscribe to source2 and source3 as source4 never completes
concat(
  source1,
  source4,
  source2,
  source3
).subscribe(console.log);
// output: 1 2 3 0 1 2 3 4 5 6 .....