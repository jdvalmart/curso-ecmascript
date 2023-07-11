function newUser(user, age, country, uid) {
    return {
        user,
        age,
        country,
        id:uid
    }
    
}

console.log(newUser('Juan', 29,'Col', 1));