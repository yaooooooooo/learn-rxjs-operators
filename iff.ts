import { iif, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';

const premiumContent$ = of('Premium Content');
const freeContent$ = of('Free Content');

const user= {id: 1, subscribed: true};
const content = iif(() => user.subscribed, premiumContent$, freeContent$)
content.subscribe(console.log);
// output: Premium Content

