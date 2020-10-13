// Usecase: Catch and Replace
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// replace 'uers' with 'users' for correct url
const githubUsers = 'https://api.github.com/uers?per_page=5'; 

// catch error and pass new replacement observable 
// that will emit default/fallback value  
const users = ajax(githubUsers).pipe(catchError((val) => of([])));

// output:
// []
// completed
const subscription = users.subscribe(
  res => console.log(res), // success callback
  err => console.error(err), // error callback
  () => console.log('completed') // complete callback
);
