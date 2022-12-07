Array.prototype.isEqual = function (array) {
  if (this.length !== array.length) {
    return false;
  } else {
    for (i = 0; i < array.length; i++) {
      if (this[i] !== array[i]) {
        return false;
      }
    }
  }
  return true;
};
