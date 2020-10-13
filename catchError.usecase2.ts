// Usecase: Catch and Re-throw
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// replace 'uers' with 'users' for correct url
const githubUsers = `https://api.github.com/uers?per_page=5`; 

// catch error and pass new replacement observable 
// that will emit default/fallback value  
const users = ajax(githubUsers).pipe(catchError((val) => {
  // do some common error handling before rethrowing it
  console.log('log error here');
  return throwError(val)
}));

// output:
// log error here
// Error Callback:Error: ajax error
const subscription = users.subscribe(
  res => console.log('Success Callback:', res), // success callback
  err => console.error('Error Callback:',err), // error callback
  () => console.log('completed') // complete callback
); 