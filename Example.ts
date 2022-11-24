export interface Person {
    name: string;
    age: number
}

class Example {
    public printPersonInfo(person: Person) {
        console.log(`Hello world ${person.name} you are ${person.age} years old today.`);
    }
}

const ex = new Example();

const person: Person = {
    name: "Bob Smith",
    age: 23
}

ex.printPersonInfo(person);