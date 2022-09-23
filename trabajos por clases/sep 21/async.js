
//funcion flecha

function SaySomething (x) {
    return new Promise(resolve=> {
        setTimeout (()=>{
            resolve('pueba '+ x);
        },2000)
    })
}

async  function talk (x) {
    const  words = await SaySomething (x);
    console.log(words)
}

talk (2)
talk (3)

//funcion normal
function SaySomething (x) {
    return new Promise(function(resolve) {
        setTimeout (()=>{
            resolve('pueba '+ x);
        },2000)
    })
}

async  function talk (x) {
    const  words = await SaySomething (x);
    console.log(words)
}

talk (4)
talk (6)

//ejercicio libro


cont = 0;

function limitador (x){
    return new Promise(resolve => {  
    for (let i = 0; i < x; i++) {
        setTimeout(() => {
            cont = cont + 1
            resolve ('contador',cont)
        },100);}})}
 limitador(4)

async function llenar () {
    
}




