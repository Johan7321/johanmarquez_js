//asincronismo settime setinterval y promesas
function base() {
    return new Promise((resolve, reject) => {
        if (true){
        resolve();
        setTimeout(() => {
            console.log('linea de codigo dentro de la funcion')
        }, 100);
    }else{
        reject();
    }
    });
}

base()
    .then(() => {
        console.log('en el .then');
        return 1000;
    })
    .then ((dato)=>{
        console.log ('En el then 2 recibo=',dato)
    })

    .then(auxiliar)//hoisting
    .catch(error=>console.log('.....error :('))

    function auxiliar () {
        console.log ('funcion auxiliar')
    }

