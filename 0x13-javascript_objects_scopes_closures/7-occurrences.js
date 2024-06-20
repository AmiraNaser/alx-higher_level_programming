#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result = (list[i] === searchElement ? result + 1 : result);
  }
  return result;
};
