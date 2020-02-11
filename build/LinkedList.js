"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        // Each node either references the next node or nothing (default nothing)
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        // Head either references the head node, or nothing if the list is empty (default nothing)
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        // While the current node has a next property, advance to the next node until we hit the last node
        while (tail.next) {
            tail = tail.next;
        }
        // Take the node we just created and have the next poperty of the "tail" refer to it
        tail.next = node;
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var node = this.head;
            // Iterate through whole chain and incrememnt length
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        // Given inputted index and return node at that index
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        // Iterate through each node, incrementing counter, and if we reach the inputted index return the corresponding node
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // If we iterated through all nodes and didn't find index, index given must've been out of bounds
        throw new Error('Index out of bounds');
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        // If you try to compare on an empty list, throw error
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    };
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        // Not actually going to swap the nodes, since that's complicated. Going to just swap the values.
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        var leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
