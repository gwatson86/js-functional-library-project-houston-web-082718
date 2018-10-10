fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callbackFunction) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i];
          callbackFunction(item, i, collection);
        }
      } else {
        for (const key in collection) {
          const item = collection[key];
          callbackFunction(item, key, collection);
        }
      }
      return collection;
    },

    map: function(collection, callbackFunction) {
      let result = [];

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          const item = collection[i];
          const mappedValue = callbackFunction(item, i, collection);
          result.push(mappedValue);
        }
      } else {
        for (const key in collection) {
          const item = collection[key];
          const mappedValue = callbackFunction(item, key, collection);
          result.push(mappedValue);
        }
      }
      return result;
    },

    reduce: function(collection, callbackFunction, acc = 0) {
      for (let i = 0; i < collection.length; i++) {
        element = collection[i];
        acc = callbackFunction(acc, element, collection);
      }
      return acc;
    },
    
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        element = collection[i];
        if (predicate(element)) {
          return element;
        }
      }
    },

    filter: function(collection, predicate) {
      result = [];
      for (let i = 0; i < collection.length; i++) {
        element = collection[i];
        if (predicate(element)) {
          result.push(element);
        }
      }
      return result;
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n = 1) {
      if (n === 1) {
        return array[0];
      } else {
      return array.slice(0, n);
      }
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array[array.length - 1];
      } else {
      return array.slice(array.length - n);
      }
    },

    compact: function(array) {
      truthyArray = [];
      for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (item) {
          truthyArray.push(item);
        }
      }
      return truthyArray;
    },

    sortBy: function(array, callbackFunction) {
      let otherArray = [...array];
      return otherArray.sort(function(a, b) {return callbackFunction(a) - callbackFunction(b)})
    },

    flatten: function(array, shallow = false, flatArray = []) {
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          item = array[i];
          if (Array.isArray(item)) {
            for (let j = 0; j < item.length; j++) {
              element = item[j];
              flatArray.push(element);
            }
          } else {
            flatArray.push(item);
          }
        }
        return flatArray;
      } else {
        for (let k = 0; k < array.length; k++) {
          item = array[k];
          if (Array.isArray(item)) {
            fi.flatten(item, false, flatArray);
          } else {
            flatArray.push(item);
          }
        }
        return flatArray;
      }
    },

    uniq: function(array, isSorted = false, callback) {
      if (!callback) {
        let uniqArray = [];
        for (let i = 0; i < array.length; i++) {
          let element = array[i];
          if (!uniqArray.includes(element)) {
            uniqArray.push(element);
          }
        }
        return uniqArray;
        // return [...new Set(array)];
      } else {
        let uniqArray = [];
        let callbackArray = [];
        for (let i = 0; i < array.length; i++) {
          let element = array[i];
          if (!callbackArray.includes(callback(element))) {
            callbackArray.push(callback(element));
            uniqArray.push(element);
          }
        }
        return uniqArray;
      }
    },

    keys: function(object) {
      let keyArray = [];
      for (const key in object) {
        keyArray.push(key);
      }
      return keyArray;
    },

    values: function(object) {
      let valueArray = [];
      for (const key in object) {
        valueArray.push(object[key]);
      }
      return valueArray;
    },

    functions: function(object) {
      let nameArray = [];
      for (const element in object) {    
        if (typeof(object[element]) === "function") {
          nameArray.push(element);
        }
      }
      return nameArray;
    }
  }
})()

fi.libraryMethod()