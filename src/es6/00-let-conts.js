
// declarar - inicializar - y reasignar con var
var lastname = 'david';
lastname = 'oscar';

console.log(lastname);

// declarar - inicializar - y reasignar con let

let fruit = 'apple';
fruit = 'kiwi';

console.log(fruit);

// declarar - inicializar - y reasignar con const

const animal = 'dog';
animal = 'cat';
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'kiwi'; // block scope
        const fruit3 = 'banana'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
