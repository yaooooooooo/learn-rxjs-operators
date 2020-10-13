import { of, throwError } from "rxjs";
import { mergeMap, retry, tap } from "rxjs/operators";

const httpsSource = of("http response");
let retryCount = 0;
const httpCall = httpsSource.pipe(
  tap(() => retryCount++),
  mergeMap(val => {
    if (retryCount === 2) {
      return of(`${val} after ${retryCount} retries`);
    }
    return throwError("Error!");
  }),
  retry(2)
);
httpCall.subscribe(
  response => console.log(response),
  error => console.log(error)
);
// output: http response after 2 retries
