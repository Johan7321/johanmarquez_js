//condicionales normales

//1
/*
function notas (n) {
     if (n== 10) {
         return console.log ('su nota es la maxima')
     }else if (n >= 8) {
        return console.log ('su nota es excelente')
     }else if (n >= 6) {
         return console.log ('su nota es regular')
     }else if (n >=4) {
         return console.log ('su nota mala')
     }else {
         return console.log ('su nota es baja')
     }}
 notas(10); 
 */
  


//2
/*
function calendario (d) {
     if (d <= 31) {
         console.log('este dia esta en enero: ', d)
     } else if (d <= 59) {
         console.log('este dia es de febrero: ', d)
     } else if (d <= 90) {
         console.log('este dia es de marzo', d)
     } else if (d <= 120) {
         console.log('este dia es de abril:', d)
     } else if (d <= 151) {
         console.log('este dia es de mayo', d)
     } else if (d <= 181) {
         console.log('este dia es de junio', d)
     } else if (d <= 212) {
         console.log('este es de julio', d)
     } else if (d <= 243) {
         console.log('este dia es de agosto', d)
     } else if (d <= 273) {
         console.log('este dia es de septiembre', d)
     } else if (d <= 304) {
         console.log('este dia es de octubre', d)
     } else if (d <= 334) {
         console.log('este dia es de noviembre', d)
     } else {
         console.log('este dia es de diciembre', d)
     }}
     calendario (85)
     


//3
/*
function horas(h) {
     if (h <= 40) {
     return h * 2600
 }
     else {
     return h * 5000
     }
 }

 console.log(horas(30)); */

//4
/*
function llamada(ss) {
 if (ss <= 180){
     return ss = ss * 1.1111111111111111
 } else {
     return ss = ss * 1.2
 }
 }
 console.log (llamada(180))  */

//5
/*
function calsegundos (ss){
 if (ss <= 60){
     m = 60/ss
     console.log ('son ',m,' minutos')
 }else{
     h = ss / 3600
     console.log ('son ',h,' horas')
 }}

 calsegundos (3600)    */











 //flecha condicionales

//1
/*
const notas =(n)=> {
         if (n== 10) {
             return console.log ('su nota es la maxima')
         }else if (n > 8) {
            return console.log ('su nota es excelente')
         }else if (n > 6) {
             return console.log ('su nota es regular')
         }else if (n >4) {
             return console.log ('su nota mala')
         }else {
             return console.log ('su nota es baja')
         }
     }
     notas(10); */

//2
/*
const calendario =(d)=> {
         if (d <= 31) {
             console.log('este dia esta en enero: ', d)
         } else if (d <= 59) {
             console.log('este dia es de febrero: ', d)
         } else if (d <= 90) {
             console.log('este dia es de marzo', d)
         } else if (d <= 120) {
             console.log('este dia es de abril:', d)
         } else if (d <= 151) {
             console.log('este dia es de mayo', d)
    
         } else if (d <= 181) {
             console.log('este dia es de junio', d)
         } else if (d <= 212) {
             console.log('este es de julio', d)
         } else if (d <= 243) {
             console.log('este dia es de agosto', d)
         } else if (d <= 273) {
             console.log('este dia es de septiembre', d)
         } else if (d <= 304) {
             console.log('este dia es de octubre', d)
         } else if (d <= 334) {
             console.log('este dia es de noviembre', d)
         } else {
             console.log('este dia es de diciembre', d)
         }}
         calendario (220)
*/

//3
/*
const horas=(h)=> {
     if (h <= 40) {
     return h * 2600
 }
     else {
     return h * 5000
     }
 }
console.log (horas(41))
*/


//4
/*
const llamada =(ss)=>{
    if (ss <= 180) {return ss*1.1111111111111111}  
    else {return ss *1.2} }
    console.log(llamada(180)); */

//5
/*
const calsegundos =(ss)=>{
     let m = ss / 60
     console.log('son ',m,' minutos') }
calsegundos(120)
*/









//ciclos

//1
/*
function nrodivisores (n) {
    for (i = 1 ; i <= n ; i++) {
        d = n % i
        if (d == 0) {
        console.log(i+' es divisor de '+n)
        }
    }}
    nrodivisores (52) 
*/

//2
/*
function nroprimos (n) {
var c =0
 for (x=1; x<=n; x++) {
     var d = n % x
     if (d==0) {
         c = c+1
     }
 }
 if (c==2) {
     console.log(n+" es primo")
 }}
nroprimos (5)
*/


//3
/*
function multiplos (n){
    for (i = 1; i < n; i++) {
            m = 5 * i
         console.log('los multiplos de 5 son: '+m)
         }
        
}
multiplos(2)
*/

//4
/*
function sinpow (x,n) {
 for (i = 1; i <= n; i++) {
     x = x * x
 }
 console.log(Math.trunc(x))}

 sinpow (2,3)
*/

//5
/*
function estrellistas(x) {
for (i=1; i<=x; i++) {
    var p =""
    for (j=0;j<i;j++){
    p=p+"*" }
    console.log(p)}}

estrellistas (2); */





// flecha ciclos

//1
/*
const nrodivisores =(n)=> {
    for (i = 1 ; i <= n ; i++) {
        d = n % i
        if (d == 0) {
        console.log(i+' es divisor de '+n)
        }
    }}
    nrodivisores (52) 
*/

//2

/*
const nroprimos =(n)=> {
var c =0
 for (x=1; x<=n; x++) {
     var d = n % x
     if (d==0) {
         c = c+1
     }
 }
 if (c==2) {
     console.log(n+" es primo")
 }}
nroprimos (5)
*/

//3

/*
const multiplos =(n)=>{
    for (i = 1; i < n; i++) {
            m = 5 * i
         console.log('los multiplos de 5 son: '+m)
         }
        
}
multiplos(2)
*/

//4
/*
const sinpow =(x,n)=> {
    for (i = 1; i <= n; i++) {
        x = x * x
    }
    console.log(Math.trunc(x))}
   
    sinpow (2,3)

*/

//5
/*
const estrellistas =(x)=> {
    for (i=1; i<=x; i++) {
        var p =""
        for (j=0;j<i;j++){
        p=p+"*" }
        console.log(p)}}
    
    estrellistas (2);

*/



// arreglo
/*
function arreglo (t){
let v=[]                          
for (let i = 0; i < t; i++) {           
v[i]=Math.round(Math.random()*100)}
console.log (v)}
arreglo (10) */


// moda
function arreglo (t){
    let v=[]
    let m = []                          
    for (let i = 0; i < t; i++) {           
    v[i]=Math.round(Math.random()*100)}
    console.log (v)
    for (let j= 0; j < v.length; j++){
        var rr = 0
        for (let l = j+1; j<l; l++){
            if (v[j] == v[l]){
                rr = rr + 1        
            };

        }
    }
    }
    arreglo (10)

//mediana
//function mediana (t){
function mediana (t){
let v=[]                          
    for (let i = 0; i < t; i++) {           
    v[i]=Math.round(Math.random()*100)}
    v.sort ()
    console.log (v)
     if (v.length %2 ==0){
        position = v.length /2
        position2= position -1
        Elemento = v[position]
        Elemento2 = v[position2]
        console.log (Elemento,Elemento2)
     }else{
        positionc = v.length / 2 -0.5
        mele = v [positionc]
        console.log (mele)
     }}      
      
     mediana (5)
         
      

const mediana1 =(t)=>{
        let v=[]                          
            for (let i = 0; i < t; i++) {           
            v[i]=Math.round(Math.random()*100)}
            v.sort ()
            console.log (v)
             if (v.length %2 ==0){
                position = v.length /2
                position2= position -1
                Elemento = v[position]
                Elemento2 = v[position2]
                console.log (Elemento,Elemento2)
             }else{
                positionc = v.length / 2 -0.5
                mele = v [positionc]
                console.log (mele)
             }}      
              
             mediana1 (5)


//desviacion estandar
function desviacion (t){
    let v=[]
    let sum = 0                          
    for (let i = 0; i < t; i++) {      
    v[i]=Math.round(Math.random()*20)
    sum = sum + v[i]       
    }
    var prom = sum / 5
    let oper1= ((v[0]-prom)**2)+((v[1]-prom)**2)+((v[2]-prom)**2)+((v[3]-prom)**2)+((v[4]-prom)**2) 
    let opr2 = oper1 / 5
    let ope3 = Math.trunc (opr2)
    v.sort();
    console.log ('el arreglo es',v)
    console.log ('La suma de todo es',sum) 
    console.log ('El promedio es',prom)  
    console.log ('la suma es ',oper1)
    console.log ('dividido por los valores es',opr2) 
    console.log ('al final la desviacion estandar',ope3) 
    }                      
    desviacion (5)   
    




    const desviacion1 =(t)=>{
        let v=[]
        let sum = 0                          
        for (let i = 0; i < t; i++) {      
        v[i]=Math.round(Math.random()*20)
        sum = sum + v[i]       
        }
        var prom = sum / 5
        let oper1= ((v[0]-prom)**2)+((v[1]-prom)**2)+((v[2]-prom)**2)+((v[3]-prom)**2)+((v[4]-prom)**2) 
        let opr2 = oper1 / 5
        let ope3 = Math.trunc (opr2)
        v.sort();
        console.log ('el arreglo es',v)
        console.log ('La suma de todo es',sum) 
        console.log ('El promedio es',prom)  
        console.log ('la suma es ',oper1)
        console.log ('dividido por los valores es',opr2) 
        console.log ('al final la desviacion estandar',ope3) 
        }
        desviacion1 (5) 
