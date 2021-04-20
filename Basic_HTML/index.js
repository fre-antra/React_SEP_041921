// function foo(){
//     console.log(this) //print global obj
// }
// foo();

let ele= document.getElementById('root')

let fs= require('fs')
fs.readFile("index.js", (err, data)=>{
    if (err) throw err;
    console.log(data)
})