import { throwError } from 'rxjs';

//emits an error with specified value
const source = throwError('This is throw error!');
source.subscribe(
    success => console.log(success),
    error => console.log(error)
);
//output: This is throw error!