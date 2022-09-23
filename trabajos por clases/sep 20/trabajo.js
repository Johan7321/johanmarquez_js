function mayuscula (texto){
    contar =0
    var mayuscula = 'ABCDEFGHIJKMLNOPQRSTUYXWZ'
    for (let i =0; i < mayuscula.length; i++){
        for (let j =0; j < texto.length; j++){
            if (mayuscula[i]==texto[j]){
                contar = contar + 1    
            }
        }
    }
    console.log('las mayuscula son:',contar)
}
function Minusculas(texto) {
    contar = 0
    var minuscula = 'abcdefghijklmnopqrstxuyz'
    for (let a = 0; a < minuscula.length; a++) {
        for (let b = 0; b <texto.length; b++){
            if (minuscula[a]==texto[b]){
                contar = contar + 1
            }
        }
    }
console.log ('Las minusculas son:',contar)
}

const general =(texto1,cb1,cb2)=> {
    let textomin = texto1.toLowerCase();
    let textomax = texto1.toUpperCase();
    cb1(texto1)
    cb2(texto1)
    return new Promise ((resolve,reject)=>{
        resolve(`El texto original es: ${texto1}\nEn minuscula: ${textomin}\nEn mayuscula: ${textomax}`);
    })
}

general('Hola',mayuscula,Minusculas)
.then ((resolve)=>{
console.log (resolve)
})


//arrays
function creacion (largo) {
    array = []
    for (let i =0; i < largo; i++){
        array[i] = Math.round(Math.random()*100)
    }
    return (array)    
};

function sumaraarray (cb1,largo) {
    return new Promise((resolve, reject) => {
        resolve('Si sirvio');
        cb1(largo)
        contador = 0
        console.log(array)
        for (let j = 0; j < array.length; j++) {
            contador = contador + array[j]
        }
        setTimeout(() => {
            console.log ('La suma del array es: ',contador)
        }, 1000);       
    })
};
sumaraarray(creacion,5)

//ejercicio

let tt = new Promise((resolve, reject) => {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; i < array.length; index++) {
        }
    }
    function ara(largo) {
        array = []
    for (let i =0; i < largo; i++){
        array[i] = Math.round(Math.random()*100)
    }
    return (array)     
    }
})


tt.ara(8)


        





