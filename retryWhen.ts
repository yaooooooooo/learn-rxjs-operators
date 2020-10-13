import { of, throwError, timer } from "rxjs";
import { mergeMap, retry, tap, retryWhen, delayWhen } from "rxjs/operators";

const httpsSource = of("http response ");
let status = 408;
const httpCall = httpsSource.pipe(
  mergeMap(val => {
    if (status === 200) {
      return of(val + status);
    }
    return throwError("Error!");
  }),
  retryWhen(error =>
    error.pipe(
      tap(val => status = 200),
      tap(val => console.log('408 error: Retrying')),
    )
  )
);
httpCall.subscribe(
  response => console.log(response)
);
// output:
// 408 error: Retrying
// http response 200