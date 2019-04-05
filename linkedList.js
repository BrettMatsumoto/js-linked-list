
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
    let newNode = {};
    newNode.value = x;
    newNode.next = null;

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
    }

    if (get(x) === false) {
      return false;
    }
    
    if (!get(x + 1)) {
      tail = get(x-1);
    }

    let previous = get(x-1);
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
    while (count < x) {
      current = current.next;
      count++
      if (current === null) {
        return false;
      }
    }
    return current;
  }
  let insert = function (x, y) {
    return linkedListExample.insert(x, y);
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
