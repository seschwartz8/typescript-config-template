import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Test sorting number array
const numbersCollection = new NumbersCollection([3, 4, 15, 10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

// Test sorting string
const charactersCollection = new CharactersCollection('aXabb');
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);

// Test sorting linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
