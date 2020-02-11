import { Sorter } from './Sorter';

class Node {
  // Each node either references the next node or nothing (default nothing)
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  constructor() {
    super();
  }
  // Head either references the head node, or nothing if the list is empty (default nothing)
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    // While the current node has a next property, advance to the next node until we hit the last node
    while (tail.next) {
      tail = tail.next;
    }

    // Take the node we just created and have the next poperty of the "tail" refer to it
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    // Iterate through whole chain and incrememnt length
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    // Given inputted index and return node at that index
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
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
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // If you try to compare on an empty list, throw error
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // Not actually going to swap the nodes, since that's complicated. Going to just swap the values.

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
