// arrays destructuring

let fruits = ['apple', 'bananas'];
let [a,b] = fruits;
console.log(a, fruits[1]);

// object destructuring

let user = {username: 'Juan', age:29};
let {username, age}=user;
console.log(username,age);

// SPREAD OPERATOR

let person = {name:'Juan', age: 28};
let country = 'Col';

let data = {id:1, ...person, country};

console.log(data);


// rest 

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(5,10,2,3)



   
