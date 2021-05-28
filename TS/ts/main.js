var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a;
var b;
var c;
var d;
var n;
var u;
function add(a, b, c) {
    return (a + b + c).toString();
}
var add2 = function (a, b) {
};
var add3 = function (a, b) {
    return a + b;
};
var add4 = function name(a) {
    return true;
};
var add5 = function (a) {
    if (a)
        return a;
    else
        return null;
};
var add6 = function (_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
};
var myClass = (function () {
    function myClass() {
        this.name = "kasary";
        this.age = 12;
    }
    myClass.prototype.func1 = function () {
        console.log("object");
    };
    myClass.prototype.func2 = function () {
        console.log("function");
    };
    myClass.prototype.func3 = function () {
    };
    myClass.prototype.func4 = function () {
        return {
            name: 12,
            age: '123'
        };
    };
    myClass.prototype.log = function () {
        console.log("This is log from super");
    };
    return myClass;
}());
var myClass2 = (function (_super) {
    __extends(myClass2, _super);
    function myClass2() {
        var _this = _super.call(this) || this;
        _this.name = "lala";
        return _this;
    }
    return myClass2;
}(myClass));
var a1 = new myClass();
var a2 = new myClass2();
var a3;
a3 = {
    name: 3,
    age: "123"
};
var profile = {
    name: "alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge: function (age) {
        this.age = age;
    }
};
var age = profile.age;
var _a = profile.coords, lat = _a.lat, lng = _a.lng;
var arr = ['cs'];
var MyClass = (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.log = function () {
        console.log(this.name + ' ' + this.age);
    };
    return MyClass;
}());
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: " + this.name;
    }
};
var fn1 = function (ve) {
    console.log(ve.summary());
};
var x = new MyClass("name12", 12);
x.log();
//# sourceMappingURL=main.js.map