"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
// Test sorting number array
var numbersCollection = new NumbersCollection_1.NumbersCollection([3, 4, 15, 10]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
// Test sorting string
var charactersCollection = new CharactersCollection_1.CharactersCollection('aXabb');
var sorter2 = new Sorter_1.Sorter(charactersCollection);
sorter2.sort();
console.log(charactersCollection.data);
// Test sorting linked list
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(4);
var sorter3 = new Sorter_1.Sorter(linkedList);
sorter3.sort();
linkedList.print();
