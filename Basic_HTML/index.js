let ele= document.getElementById('root')

// let fs= require('fs')
// fs.readFile("index.js", (err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

/******INSTANCE METHOD***********/
// function Person(name, age){
//     this.name= name;
//     this.age= age;
//     this.walk= function(){
//         console.log(this.name+' is walking')
//     }
// }
// let p= new Person('Duy', 30)
// p.walk()
// console.log(p.__proto__)

/*****ENCAPSULATION************/
// class Person {
//     constructor(nane,age){
//         this._name= name
//         this._age= age;
//         this.salary=0;
//     }
//     get name(){
//         return this._name;
//     }
//     set name(newName){
//         this._name= newName;
//     }
//     getSalary(){
//         return this.salary;
//     }
// }
// let p= new Person('Duy',30)
// console.log(p)

/******INHERITANCE***********/
// class Employee extends Person {
//     constructor(name,age,company){
//         super(name,age);
//         this.company=company;
//     }
//     getSalary(baseSalary){
//         return baseSalary+this.salary;
//     }
// }

// function Employee(name,age,company){
//     Person.prototype.constructor.call(this,name,age)
//     this.company=company;
// }
// Employee.prototype= Object.create(Person.prototype)
// Employee.prototype.constructor= Employee;

// let e = new Employee('ND',18,'Boeing')
// console.log(e.getSalary(100))

/******ABSTRACTION***********/

/******ARRAY***********/
let arr= [1,2,3]
// Array.prototype.myForEach= function(cb) {
//     for(let i=0; i<this.length; i++){
//         cb(this[i],i,this)
//     }
// }
// Array.prototype.myMap= function(cb) {
//     let newArray=[]
//     for(let i=0; i<this.length; i++){
//         newArray.push(cb(this[i],i,this))
//     }
//     return newArray;
// }
// Array.prototype.myReduce=function(cb,initial){
//     let acc,cur;
//     let method= (initial,start)=>{
//         acc= initial;
//         for (let i=start; i<this.length; i++){
//             cur= this[i]
//             acc= cb(acc,cur)
//         }
//         return acc
//     }
//     return (initial==undefined)? method(this[0],1): method(initial,0)

// }


// let sum= arr.myReduce((acc,cur)=>acc+cur,19)
// console.log(sum)

// arr.myForEach((item,i,arr)=>{
//     console.log(item,i,arr)
// })
// let arr1= arr.myMap(i=>i*4)
// console.log(arr1)

//console.log(arr)

/******OBJECT***********/
// const obj= {name: "Ana", age:18};

// console.log(obj)
// for (let key in obj){
//     console.log(key+":"+obj[key])
// }
// Object.prototype.forEach= function(cb){
//     const keys= Object.keys(this);
//     keys.forEach(i=>cb(i, this[i]))
// }
// obj.forEach((key,value)=>{
//     console.log(key+":"+value)
// })

/******DATA COPY***********/
const d = {name:{value:"hello"}};
//const _ = require("lodash")

/******DESTRUCTURE***********/
// const arr1= [{name:"Ana"}, ()=>{}]
// const [state,useState]= arr1
// console.log(state,useState)

/*******ARROW FUNCTION**********/
// const foo= (()=>{
//     console.log("This is foo")
//     return {
//         init: ()=>{
//             console.log("init")
//         }
//     }
// })()
// foo.init()
//foo()

// function add(...a){
//     let method= (arr)=> arr.reduce((acc,curr)=>acc+curr)
//     return function(...b){
//         //return method(a)+ method(b)
//         return method([...a,...b])
//     }
// }
// const add=(...a)=>(...b)=>[...a,...b].reduce((acc,curr)=>acc+curr)
// console.log(add(1,2,3)(2))

/*****CLOSURE************/
// function f1(){
//     let a=5;
//     return function f2(){
//        console.log(a)

//     }
// }
// let a = f1();

/******SET TIMEOUT***********/

function randomTimer(){
    return Math.floor(Math.random()*5)
}
/*******API**********/
let data;
function getUser(id,cb){
    var url=`https://jsonplaceholder.typicode.com/todos/${id}`
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data= JSON.parse(this.responseText)
            cb(data)
        }
};
    xhttp.open("GET", url, true);
    xhttp.send();
}

getUser(1,data1=>{
    logMsg(data1)
    getUser(2,data2=>{
        logMsg(data2)
    })
})

function logMsg(data) {
    console.warn(data)
}

console.log(randomTimer())

//getUser()

/******PROMISE***********/
function getUserPromise(){
    return new Promise(function(resolve, reject){

    })
}

class MyPromise {
    constructor(cb){
        this.resolve= function(data){

        };
        this.reject= function(){

        };
        this.thenCbQueue=[];

        cb(this.resolve, this.reject);
    }
    then(thenCb){
        this.thenCbQueue.push(thenCb);
    }
}

/*****************/

/*****************/

/*****************/

/*****************/

