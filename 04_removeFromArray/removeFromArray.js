const removeFromArray = (array, ...removeElements) => {
  for (let i = 0; i < removeElements.length; i++) {
    if (removeElements[i] && array.includes(removeElements[i])) {
      const result = array.indexOf(removeElements[i]);
      array.splice(result, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
