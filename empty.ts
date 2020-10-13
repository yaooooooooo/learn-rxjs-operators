import { empty, EMPTY } from 'rxjs';

empty().subscribe(
  success => console.log('success'),
  error => console.log('error'),
  () => { console.log('complete') }
)
// output: complete

EMPTY.subscribe(
  success => console.log('success'),
  error => console.log('error'),
  () => { console.log('complete') }
)
// output: complete