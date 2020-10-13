import { of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';

// timeout after 2 seconds
of('Hello').pipe(
    delay(3000),
    timeout(2000)
  ).subscribe(
    val => console.log(val),
    err => console.log('Error: ', err)
  )
// output
// Error: {message: "Timeout has occurred", name: "TimeoutError"}