const anotherFuncion = () => {
    return new Promise ((resolve, recject) => {
        if (true) {
            resolve('Hey!!');
        } else {
            recject('whoooos!!');
        }
    })
}


anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(()=> console.log('finally'))