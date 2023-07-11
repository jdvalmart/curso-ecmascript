function newUser(name, age, country){
    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Juan', 29, 'CO');

function newAdmin(name = 'Oscar', age = 34, country = "CL" ){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Camila', 26, 'PR');