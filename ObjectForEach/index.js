Object.prototype.myForEach = function (cb) {
  if (Array.isArray(this)) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  } else {
    // for (let key in this) {
    //   cb(this[key], key, this);
    // }
    Object.keys(this).myForEach(k => {
      cb(this[k], k, this);
    })
  }
};


let obj = {'1': '!', '2': '@'};
let arr = [1,2,3]


arr.myForEach((item) => {console.log(item)});
obj.myForEach((item, k) => {console.log(k, ':', item)});

Array.prototype.myReduce = function (cb, initial) {
  let ans;
  if (initial !== undefined) {
    ans = initial;
    
  } else {
    ans = this[0];
  }
  
  return ans;
}

const arr1 = ['a', 'b', 2]

console.log(arr1.myReduce((a,b) => a+b));
