//sumar todos los elementos de un arrglo 
 let v=[],
     t=Math.round((Math.random()*20-10)+10),
     s=0
 console.log('valor de variable t: '+t)
 for (let i = 0; i < t; i++) {
     v[i]=Math.round(Math.random()*100)
 }
 console.log(v)
 for (let i = 0; i < v.length; i++) {
     s = s + v[i]
 }
 console.log(s)

//promediar los elementos de un arreglo 
// let v=[],
//     t=Math.round((Math.random()*20-10)+10),
//     s=0,
//     p=0
// console.log('valor de variable t: '+t)
// for (let i = 0; i < t; i++) {
//     v[i]=Math.round(Math.random()*100)
// }
// console.log(v)
// for (let i = 0; i < v.length; i++) {
//     s = s + v[i]
// }
// console.log('la suema es: '+s)
// p = s/v.length
// console.log('el promedio es: '+p)

//obtener el numero mayor de los elemtos de un arreglo arreglo
/*let v=[],
    t=Math.round((Math.random()*20-10)+10),
    m=0
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
    if (v[i]>m) {
        m = v[i]
    }
}
console.log(v)
console.log('el numero mayor es: '+m)*/

//obtener el numero menor de los elemtos de un arreglo arreglo
/*let v=[],
    t=Math.round((Math.random()*20-10)+10),
    m=100
console.log('valor de variable t: '+t)
for (let i = 0; i < t; i++) {
    v[i]=Math.round(Math.random()*100)
    if (v[i]<m) {
        m = v[i]
    }
}
console.log(v)
console.log('el numero menor es: '+m)*/

//buscar un elemento dentro de un arreglo
/*let v=[];
let t=Math.round((Math.random()*20-10)+10)
console.log(`Valor variable tam= ${t}`);

for(let i=0; i<t; i++){
  v[i]=Math.round(Math.random()*100)
}
console.log(v)

var x=Math.round((Math.random()*20-10)+10)
if(x in v){
  console.log('El numero se encuentra en la lista ')
}else{
  console.log('El numero no se encuentra en la lista ')
}*/
