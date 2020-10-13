import { timer, combineLatest, from, of } from 'rxjs';
import { map, delay, concatMap } from 'rxjs/operators';

/*****
 * Make a Juice with latest ingredients
 * Juice must contain a fruit, veggie and protein powder
 */

// Emit a fruit from array with 1sec delay
const fruit$ = from(['apple', 'banana', 'mango']).pipe(concatMap(val => of(val).pipe(delay(1000))));
// Emit a veggie from array with 2sec delay
const veggie$ = from(['carrot', 'beetroot', 'spinach']).pipe(concatMap(val => of(val).pipe(delay(2000))));
// Emit a protein from array with 3sec delay
const proteinPowder$ = from(['whey', 'casein', 'pea']).pipe(concatMap(val => of(val).pipe(delay(3000))));

// when all observables emit atleast once, use latest value from each to make juice everytime an observable emits
combineLatest(fruit$, veggie$, proteinPowder$).subscribe(
  ([fruit, veggie, proteinPowder]) => {
    console.log(`Juice made with: ${fruit}, ${veggie}, ${proteinPowder}`);
  }
);
/**
 * Explanation: 
 * All observables will be emitting atleast one value at the end of 3 seconds
 * So when protein powder is emitted for the 1st time at the end of 3rd sec, the latest fruit is banana and latest veggie is carrot. 
 * Juice will be made with latest ingredients everytime any of the observable emits. 
 */
/** result
Juice made with: banana, carrot, whey
Juice made with: mango, carrot, whey
Juice made with: mango, beetroot, whey
Juice made with: mango, beetroot, casein
Juice made with: mango, spinach, casein
Juice made with: mango, spinach, pea
 */