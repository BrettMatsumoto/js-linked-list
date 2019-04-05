
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
    return linkedListExample.remove(x);
  }
  let get = function (x) {
    let currentNode = head;
    for (let i = 0; i < x; i++) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode.value;
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
