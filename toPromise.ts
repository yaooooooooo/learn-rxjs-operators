import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const source =  of('Hello Promise!!');
//convert source observable to promise
source
  .toPromise()
  .then(result => {
    console.log(result);
  });
// output: Hello Promise!!


const githubUsers = `https://api.github.com/users?per_page=1`;
let users = ajax(githubUsers);
users.toPromise().then(
  res => console.log('Response received')
).catch(
  err => console.log('Error received')
);
// output: Response received
