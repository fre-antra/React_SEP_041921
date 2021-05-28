const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number; name: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

const arr: string[] = ['cs'];

class MyClass<T,G> {
    constructor(protected name:T,protected age:G) {
    }

    log():void {
        console.log(this.name + ' ' + this.age);
    }
}

interface Vehicle {
    name: string,
    year: Date,
    broken: boolean,
    summary() :string
}

const oldCivic:Vehicle = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
}

const fn1 = function (ve:Vehicle):void {
    console.log(ve.summary()); 
}

const x = new MyClass("name12", 12)
x.log()

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longtitude())
        }
    }
}

export class Company {
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longtitude())
        }
    }
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor() {
        this.googleMap = new this.googleMap.maps.Map()
    }

    addMarker(mappable: User | Company) {
        this.googleMap.Marker('id')
    }
}

interface Mappable {
    location : {
        lat: number;
        lng: number;
    }
}