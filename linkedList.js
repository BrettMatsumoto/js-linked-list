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
      tail = get(x - 1);
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
    if (x < 0){
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
    let newNode = {};
    newNode.value = x;
    newNode.next = null;
    if (x == undefined) { //if no value is passed in
      return null;
    }
    if (y === 0) { //if looking for head
      newNode.next = head;
      head = newNode;
      return head;
    }
    console.log('test',y);
    if (get(y) === false) { //if index doesn't exist
      return false;
    }
    if (!getHead()) { //if no head
      head = newNode;
      tail = newNode;
      return head;
    }
    if (get(y - 1)) { //if previous index exists
      newNode.next = get(y);  //set newNodes next to the index'd object
      get(y - 1).next = newNode; //set previous nodes next to newNode
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
