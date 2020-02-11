"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Test sorting number array
var numbersCollection = new NumbersCollection_1.NumbersCollection([3, 4, 15, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Test sorting string
var charactersCollection = new CharactersCollection_1.CharactersCollection('aXabb');
charactersCollection.sort();
console.log(charactersCollection.data);
// Test sorting linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
