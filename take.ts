import { of, interval, EMPTY, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

//emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
//emit the first emitted value then complete
const subscription = source.pipe(take(1))
                    .subscribe(
                      val => console.log(val),
                      err => console.log(err),
                      () => console.log('completes')
                    );
// output:
// 1
// completes


//emits all value then complete when source completes before reaching provided count
const subscription2 = source.pipe(take(10))
                      .subscribe(
                        val => console.log(val),
                        err => console.log(err),
                        () => console.log('completes')
                      );
// output:
// 1 2 3 4 5
// completes


// emits first 5 values then complete
interval(1000).pipe(take(5))
  .subscribe(
    val => console.log(val),
    err => console.log(err),
    () => console.log('completes')
  );
// output: 0 1 2 3 4
// completes