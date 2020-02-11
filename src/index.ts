import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([3, 4, 15, 10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
