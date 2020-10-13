import { of, from, timer, Observable, throwError } from "rxjs";
import { delay, concatMap, tap, take, mergeMap, mapTo, map} from "rxjs/operators";

// initial balance
let balance = 500;
// debit action - deduct amount from balance
const debit = (amount) => (amount <= balance) ? of(amount).pipe(mapTo(balance -= amount)) : of('Transaction Failed');
// credit action with 2 sec delay - add amount to balance
const credit = (amount) => of(amount).pipe(delay(2000), map((amount) => balance += amount));

// emit transactions with transaction type and amount
const transactionsSource: Observable<Array<any>> = from([[credit, 3000], [debit, 1000], [debit, 2000]]);

// MergeMap fails in this scenario where order of events(transactions) is important
transactionsSource.pipe(
  mergeMap((val) => val[0](val[1]))
).subscribe(
  val => console.log('Balance: ', val),
  err => console.log(err),
  () =>  { 
    balance = 500; // reset balance for concatMap - for demo
    console.log('Complete') 
  }
);
// as credit action takes 2 sec to complete, debit action are executed before credit completes, so transactions failed
// output: 
// Balance: Transaction Failed --- after [debit, 1000]
// Balance: Transaction Failed --- after [debit, 2000]
// Balance: 3500               --- after [credit, 3000] 
// Complete

// concatMap is at rescue where order of events is important 
transactionsSource.pipe(
  concatMap((val) => val[0](val[1]))
).subscribe(
  val => console.log('Balance: ', val),
  err => console.log(err),
  () => console.log('Complete')
);
// output:
// Balance: 3500 --- after [credit, 3000]
// Balance: 2500 --- after [debit, 1000]
// Balance: 500  --- after [debit, 2000]
// Complete