import { from, of } from 'rxjs';
import { map, delay, concatMap, combineAll } from 'rxjs/operators';

const fruit$ = from(['apple', 'banana', 'mango']);
const veggie$ = from(['carrot', 'beetroot']).pipe(concatMap(val => of(val).pipe(delay(1000))))

// create inner observables by mapping each fruit with veggie observable.
// emit combined values by taking latest value from each every time an inner observable emits
const fruitVeggieCombinations = fruit$.pipe(
  map((fruit) => veggie$.pipe(
    map((veggie) => fruit + ',' + veggie)
  )),
  combineAll()
)

fruitVeggieCombinations.subscribe(
  (val) => console.log(val)
);
// output:
// ["apple,carrot", "banana,carrot", "mango,carrot"]
// ["apple,beetroot", "banana,carrot", "mango,carrot"]
// ["apple,beetroot", "banana,beetroot", "mango,carrot"]
// ["apple,beetroot", "banana,beetroot", "mango,beetroot"]