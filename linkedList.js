/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let linkedList = {

  }
  let getHead = function () {
    return linkedList.getHead();
  };
  let getTail = function () {
    return linkedList.getTail();
  }
  let add = function (x) {
    return linkedList.add(x);
  }
  let remove = function (x) {
    return linkedList.remove(x);
  }
  let get = function (x) {
    return linkedList.get(x);
  }
  let insert = function (x,y){
    return linkedList.insert(x,y);
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