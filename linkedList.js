/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  let getHead = function () {
    return head;
  };

  let getTail = function () {
    return tail;
  }

  let add = function (x) {
    let newNode = {
      value = x,
      next = null
    };

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }

    return newNode;
  }

  let remove = function (x) {
    if (x === 0) {
      head = head.next;
      return head;
    } if (head === null) {
      return null;
    }

    if (get(x) === false) {
      return false;
    }

    if (!get(x + 1)) {
      tail = get(x - 1);
    }

    if (head === null) {
      return false;
    }

    let previous = get(x - 1);
    let current = get(x);
    previous.next = current.next;
    return previous;
  }

  let get = function (x) {
    let current = getHead();
    let count = 0;

    if (x === 0) {

      return current
    }

    if (x < 0) {
      return false;
    }

    while (count < x) {
      current = current.next;
      count++;

      if (current === null) {
        return false;
      }
    }
    return current;
  }

  let insert = function (x, y) {
    let current = get(y);
    let previous = get(y - 1)


    let newNode = {
      value = x,
      next = null
    };

    if (x == undefined) {
      return null;
    }

    if (y === 0) { //if looking for head
      newNode.next = head;
      head = newNode;
      return head;
    }

    if (current === false) {
      return false;
    }

    if (!getHead()) {
      head = newNode;
      tail = newNode;
      return head;
    }

    if (previous) {
      newNode.next = get(y);
      previous.next = newNode;
      return newNode;
    }
  }

  let linkedListMethods = {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert,
  }

  return linkedListMethods
}
