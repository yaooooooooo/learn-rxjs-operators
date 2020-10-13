import { defaultIfEmpty } from 'rxjs/operators';
import { of } from 'rxjs';

const users = of();
//if empty response, send empty array as default value
users.pipe(defaultIfEmpty([])).subscribe(val => console.log(val));
// output: []