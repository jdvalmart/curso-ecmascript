const fnAsync = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(()=>resolve('AsynC!!'),2000)
        :reject(new error('error!'));
    })
} 