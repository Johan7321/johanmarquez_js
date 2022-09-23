function general (c1,c2,texto){
    let cont = 0
     let textomin = texto.toLowerCase();
     let textomax = texto.toUpperCase();
     for (let b = 0; b <texto.length; b++){
        cont = cont + 1
    }
    console.log('El texto original es:',texto,'\nEn minuscula:',textomin,'\nEn mayuscula:',textomax)
    setTimeout(() => {
        console.log('El numero de caracteres es:',cont)
    }, 2000);
    c1 (texto)
    c2 (texto)
}
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
general(mayuscula,Minusculas,'Johan Marquez')
