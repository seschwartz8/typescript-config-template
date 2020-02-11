"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
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
