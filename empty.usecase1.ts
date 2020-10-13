import { EMPTY, of } from 'rxjs';

let subscribedToDailyGreeting = false;

function sendDailyGreeting() {
  return subscribedToDailyGreeting ? of('Welcome to rxjs') : EMPTY;
}

sendDailyGreeting().subscribe(
  success => console.log(success),
  error => console.log(error),
  () => console.log('complete') // only complete will be called when not subscribed to daily greeting
)
// output: complete