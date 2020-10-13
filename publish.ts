import { interval } from 'rxjs';
import { publish, tap } from 'rxjs/operators';

//emit value every 1 second
const source = interval(1000);
const example = source.pipe(
  tap(console.log),
  publish()
);

example.subscribe(val =>
  console.log(`Subscriber One: ${val}`)
);
example.subscribe(val =>
  console.log(`Subscriber Two: ${val}`)
);

//call connect after 5 seconds
setTimeout(() => {
  console.log('after 5 sec');
  example.connect();
}, 5000);
// output:
// after 5 sec
// 0
// Subscriber One: 0
// Subscriber Two: 0
// 1
// Subscriber One: 1
// Subscriber Two: 1
// 2
// Subscriber One: 2
// Subscriber Two: 2
// 3
// Subscriber One: 3
// Subscriber Two: 3
// ...