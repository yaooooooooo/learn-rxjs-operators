import { ajax } from 'rxjs/ajax';

const githubUsers = `https://api.github.com/users?per_page=1`;

// emits entire response object 
let users = ajax(githubUsers);
users.subscribe(
  res => console.log(res),
  err => console.error(err)
);

// emits the data from the response object
users = ajax.getJSON(githubUsers);
users.subscribe(
  res => console.log(res),
  err => console.error(err)
);

// usage with complete request object
ajax({
  url: githubUsers,
  method: 'GET',
  headers: {},
  body: {}
});
const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);