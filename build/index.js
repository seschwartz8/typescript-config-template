"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var sorter = new Sorter_1.Sorter([3, 4, 15, 10]);
sorter.sort();
console.log(sorter.collection);
