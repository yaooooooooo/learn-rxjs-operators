import { fromEvent, interval, BehaviorSubject, timer } from 'rxjs';
import { timeInterval, tap, timeout } from 'rxjs/operators';

// time interval between clicks
fromEvent(document, 'click')
  .pipe(timeInterval(), tap(console.log))
  .subscribe( val =>
      (document.body.innerText = `milliseconds since last click: ${val.interval}`)
  );
// output
// { interval: 13692, value: MouseEvent }


timer(1000, 2000)
  .pipe(timeInterval())
  .subscribe( console.log);
// output
//  {value: 0, interval: 1001}
//  {value: 1, interval: 2005}
//  {value: 2, interval: 1999}
//  {value: 3, interval: 2002}