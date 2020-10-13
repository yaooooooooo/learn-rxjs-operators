import { from, merge } from 'rxjs';
import { partition, map } from 'rxjs/operators';

const source = from([
  { name: 'Apple', type: 'fruit'},
  { name: 'Bananan', type: 'fruit' },
  { name: 'Carrot', type: 'vegetable' },
  { name: 'Beetroot', type: 'vegetable' }
  ]);
const [fruits, veggies] = source.pipe(partition(({type}) => type  === 'fruit'));

fruits.subscribe(console.log)
// output:
// {name: "Apple", type: "fruit"}
// {name: "Bananan", type: "fruit"}
veggies.subscribe(console.log)
// output:
// {name: "Carrot", type: "vegetable"}
// {name: "Beetroot", type: "vegetable"}