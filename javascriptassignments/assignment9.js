function getType(variable)
{
    return typeof(variable);
}

console.log(getType(14));
console.log(getType(true));
console.log(getType('hey'));
console.log(getType(getType));
var car;
console.log(getType(car));
let vehicle = {name: "Truck", length: "100"}
console.log(getType(vehicle));