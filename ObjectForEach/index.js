Object.prototype.myForEach = function (cb) {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  } else {
    // for (let key in this) {
    //   cb(this[key], key, this);
    // }
    Object.keys(this).forEach(k => {
      cb(this[k], k, this);
    })
  }
};



let obj = {'1': '!', '2': '@'};
let arr = [1,2,3]


arr.myForEach((item) => {console.log(item)});
obj.myForEach((item, k) => {console.log(k, ':', item)});

