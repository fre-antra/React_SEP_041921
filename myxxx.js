Array.prototype.MyForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

Array.prototype.MyMap = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
};

Array.prototype.MyReduce = function (callback, initial) {
  let acc, cur;
  if (initial == undefined) {
    acc = this[0];
    for (let i = 1; i < this.length; i++) {
      cur = this[i];
      acc = callback(acc, cur);
    }
  } else {
    acc = initial;
    for (let i = 0; i < this.length; i++) {
      cur = this[i];
      acc = callback(acc, cur);
    }
  }
  return acc;
};

Array.prototype.MyFilter = function(callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
}