
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
//throw error
const source = throwError('An error occurred!');
//catch error and return an observable with error message
// catchError requires an observable to be returned
const example$ = source.pipe(catchError(val => of(val)));
//output: 'An error occurred!'
const subscribe = example$.subscribe(val => console.log(val));