let hello = 'hello';
let world = 'world';

let epicPrhase = hello + ' ' + world + '!';

console.log(epicPrhase);


// template literals

let epicPrhase2 = `${hello} ${world}!`;

console.log(epicPrhase2);

//multiline strings

let lorem = 'esto es un string \n' + 'esto es otra linea';
let lorem2 = `esto es una frase epica
esta es la continuacion de esta frase`;

console.log(lorem);
console.log(lorem2);


const numero = (num1, num2) => `el numero es: ${num1 + num2}`


const resultado = numero(10, 20)
console.log(resultado);