function* iterate(array) {
    for (let value of array){
        yield value;
    }
}

const it = iterate (['oscar','ana','ulise','jenifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* generator(){
    yield 1
    yield 2
    yield 3
}

const generador = generator()

console.log(generador.next())
console.log(generador.next())
console.log(generador.next())

 

  