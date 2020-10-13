import { timer } from 'rxjs';
import { debounce } from 'rxjs/operators'

// emit 0 after 1sec and then emit in sequence for every 2 sec
const source = timer(1000,2000);

// emit if there is 2 sec gap between emissions
source.pipe(debounce(ev => timer(2000)))
.subscribe(x => console.log(x));
// output:
// 0

// Why only 0? 
// when subscribed, timer started for 2 sec
// 0 emitted after 1 sec
// timer ends at after 2 sec and emits 0
// 1 emitted at 3rd sec, timer started again for 2 sec
// Before completing 2sec timer, 2 is emitted at 5th sec , so timer restarts again 
// As now source emits for every 2 sec and timer restarts for every emission and it wll never find a gap of 2 sec between emissions, so nothing will be emitted after


// emit 0 after 1sec and then emit in sequence for every 2 sec
const source2 = timer(1000,2000);

// emit if there is 1 sec gap between emissions
source2.pipe(debounce(ev => timer(1000)))
.subscribe(x => console.log(x));

// output: 0 1 2 3 4 5 .....
// emits every number emitted by source2 as debounce looking just for 1 sec gap between emissions and source2 emits for every 2 sec
