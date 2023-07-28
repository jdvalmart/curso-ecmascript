const user = {username:'Juan', age:34, country:'col'};

const {username, ... values} = user;

console.log(username);
console.log(values);