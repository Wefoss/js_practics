//конфеты друзей
class Friends {
  constructor(arrayFriends) {
    this.candies = 0;
    this.arrayFriends = arrayFriends;
  }
  getCandies(array = this.arrayFriends) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object" && array[i] !== null) {
        this.getCandies(array[i]);
      } else if (typeof array[i] !== "string") {
        this.candies += array[i];
      }
    }
    return this.candies;
  }
}
const friendsWithCandies = [
  "Arya",
  1,
  ["Snow", 2, ["Davos", 2, ["Thirion", 3], ["whitewalker", 20000]]],
  ["Dog", 3],
];

const friends = new Friends(friendsWithCandies);



// pop list
class LinkedListIterator {
  constructor(link) {
    this.link = link;
    this.counter = null;
  }
  next() {
    this.counter = this.counter ? this.counter.next : this.link.head;

    return {
      value: this.counter ? this.counter.value : undefined,
      done: !this.counter,
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    return this._value = value;
  }
}
class ListLinks {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const item of args) {
      this.push(item);
    }
  }
  push(item) {
    let oneItem = new ListItem(item);
    if (this.length === 0) {
      this.head = oneItem;
      this.tail = oneItem;
    } else {
      this.tail.next = oneItem;
      oneItem.prev = this.tail;
      this.tail = oneItem;
    }
    return ++this.length;
  }

  pop() {
      if (this.length === 0) {
      return (this.head.value = null);
    }

    let deletedVal = this.tail;
    let currentVal = this.head;
    while (currentVal.next) {
      if (!currentVal.next.next) {
        currentVal.next = null;
      } else {
        currentVal = currentVal.next;
      }
    }
    this.tail = currentVal;
    --this.length;
    return deletedVal && deletedVal.value;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const list = new ListLinks(40, {}, 2, "hello", []);
console.log(...list);



// Queue
class Queue {
  constructor(...args) {
    this._head = 0;
    this._tail = 0;
    for (const iterator of args) {
      this.push(iterator);
    }
  }

  get size() {
    return this._tail - this._head;
  }
  push(val) {
    this[this._tail] = val;
    this._tail++;
    return this.size;
  }
  unshift() {
    let item = this[this._head];
    delete this[this._head++];
    return item;
  }
  mergeQueues = (lineOne, lineTho) => {
    let mainQueue = new Queue();
    let biggestTail = lineOne._tail > lineTho._tail ? lineOne : lineTho;
    for (let i = 0; i < biggestTail._tail; i++) {
      if (lineOne[i]) {
        mainQueue.push(lineOne[i]);
      }
      if (lineTho[i]) {
        mainQueue.push(lineTho[i]);
      }
    }
    // let diff = tailOne._tail > tailTho._tail ? tailOne._tail - tailTho._tail : tailTho._tail - tailOne._tail;
    // let averageLength = (tailOne._tail + tailTho._tail - diff) / 2;
    // let biggestTail = tailOne._tail > tailTho._tail ? tailOne : tailTho
    // for (let i = 0; i < averageLength; i++) {
    //   q3.push(tailOne[i]);
    //   q3.push(tailTho[i]);
    // }
    // for (let i = averageLength; i < averageLength + diff; i++) {
    //   q3.push(biggestTail[i]);
    // }
    return mainQueue;
  };
}

const queue = new Queue(1, 2, 3, 4, 5);
const queue1 = new Queue(6, 7, 8, 9, 0, 100, 200);
console.log(queue);
const newQueue = queue.mergeQueues(queue, queue1);
console.log(newQueue);
