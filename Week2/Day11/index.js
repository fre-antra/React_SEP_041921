class myPromise {
  constructor(cb) {
    this.resolve = function (data) {
      const curThenCb = this.thenCBQueue.shift();
      curThenCb(data);
    };
    this.reject = function () {};
    this.thenCBQueue = [];
    cb(this.resolve, this.reject);
  }
  then(thenCb) {
    this.thenCBQueue.push(thenCb);
  }
}

//********BIND CALL APPLY*********
// const person = {
//    firstName: 'Ana',
//    lastName: 'Lin',
//    getFullName: function() {
//       let fullName = this.firstName + " " + this.lastName;
//       return fullName;
//    }
// }

// let personIntro = function(hobby, food) {
//    console.log(
//       this.firstName + " " + this.lastName + " likes " + hobby + " and " + food
//    )
// }

// let myIntro = personIntro.bind(person)
// myIntro('video games', 'sushi')

// personIntro.call(person, 'games', 'sushi')
// personIntro.apply(person, ['games', 'sushi'])
