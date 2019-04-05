/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let linkedListExample = {
    value: 'Ready Player One',
    next: {
      value: '1982',
      next: {
        value: 'Neuromancer',
        next: {
          value: 'Snow Crash',
          next: null
        }
      }
    }
  }
  
  let getHead = function () {
    return {
      value: 'Ready Player One',
    }
  };
  let getTail = function () {
    return linkedListExample.getTail();
  }
  let add = function (x) {
    return linkedListExample.add(x);
  }
  let remove = function (x) {
    return linkedListExample.remove(x);
  }
  let get = function (x) {
    return linkedListExample.get(x);
  }
  let insert = function (x,y){
    return linkedListExample,ple.insert(x,y);
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
