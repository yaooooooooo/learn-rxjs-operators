import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

//creates an observable that can be subscribed to for click event on document
const source = fromEvent(document, 'click');
source.subscribe(val => console.log(`${val.type} at ${val.timeStamp}`));
// output: click at 959.0800000005402