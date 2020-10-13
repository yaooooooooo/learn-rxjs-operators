import { defer, of} from 'rxjs';

// deferes the date value until subscription
const deferedDate = defer(() => of(new Date()));

console.log('current date time', new Date());

// Observable returns date that is 2 sec after the current date, as it is subscribed after 2 sec
setTimeout(() => {
    deferedDate.subscribe(date => console.log('defered date time', date));
}, 2000)
// output
// current date time 2020-05-20T15:02:36.280Z
// defered date time 2020-05-20T15:02:38.281Z