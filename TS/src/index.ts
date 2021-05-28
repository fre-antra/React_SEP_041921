let a:number;
let b:string;
let c;
let d : boolean;
let n : null;
let u : undefined;

function add(a : number,b? : number, c? : number) : string {
    return (a+b+c).toString();
}

const add2 : (a?: number, b?: number) => any = (a, b) => {
}

const add3  = (a : number, b : number): number => {
    return a + b;
}

const add4 = function name(a:any):boolean {
    return true
}

const add5 = (a?:number):void | number => {
    if (a) return a
    else return null;
}

const add6 = ({a,b} : {a:number, b : number}):void => {
    console.log(a);
    console.log(b);
}

interface myInterface {
    name : number,
    age: string
}

interface myFn {
    func1(),
    func2()
}

interface myFn2 {
    func3(),
    func4()
}

class myClass implements myFn, myFn2{
    protected name: string;
    protected age: number;

    constructor() {
        this.name = "kasary";
        this.age = 12;
    }

    func1():any {
        console.log("object");
    }

    func2():any {
        console.log("function");
    }
    func3() {

    }

    func4() : myInterface {
        return {
            name: 12,
            age: '123'
        }
    }

    log():any {
        console.log("This is log from super");
    }
}

class myClass2 extends myClass {
    protected name;
    
    constructor() {
        super();
        this.name = "lala";
    }

    //log() {
    //    console.log(this.name + ' ' + this.age);
    //}
}

let a1 = new myClass();
let a2 = new myClass2();
let a3 : myInterface;

a3 = {
    name : 3,
    age: "123"
}
//a1.func1();
//a2.log()
//console.log(add2());
//console.log( add(1,2,4));
//console.log(add5());
//console.log(add6({a:1,b:12}));
