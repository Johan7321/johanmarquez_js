
//numero perfecto
/*
function perfecto (num ){
    let suma = 0;
     for (let  i= 1; i < num; i++) {
        if (num%i==0){
            suma = suma + 1
            
        }    
    }
    if (suma == num ){
        return `${num} es perfecto`;

    }
    else {
        return `${num} no es perfecto`;
    }} 

    console.log (perfecto(25));
    
    */


//avriguar que tipo de triangulo es
/*
function triangulo(a,b,c) {

    if ( a!=b && b !=c) {
         console.log ('escaleno')
    }
    else if (a==b && b==c) {
         console.log ('equilatero')
    }else {
         console.log ('isoceles')
    }
    
}
triangulo (1,1,2); */

//teorema de pitagoras
/*function teo(ca,co) {
let suma = Math.sqrt (ca **2 + co**2)
return suma   
}

console.log(teo (3,4)); */

//cindicionales
//1
function numero(n1,n2,n3) {
    if (n2 < n1 && n2 < n3) {
        console.log ('el segundo numero es el menor',n2)
    }else if (n1 < n2 && n1 < n3) {
        console.log ('el primer numero es menor',n1)
    }else {
        console.log ('el tercer numero es menor')
    }
}
numero(4,2,3)

//2





    
//4
function notas (n) {
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
notas(10);

//6
var n=Math.round(Math.random()*365)
console.log
if (n<=0) {                  
    console.log(" El numero no valido") 
} else if (n<=31){
    console.log("El numero ingresado muestra el mes de Enero")
} else if (n<59){
    console.log("El numero ingresado muestra el mes de FEBRERO")
} else if (n<90){
    console.log("El numero ingresado muestra el mes de MARZO")
} else if (n<120){
    console.log("El numero ingresado muestra el mes de ABRIL")
} else if(n<151){
    console.log("El numero ingresado muestra el mes de MAYO")
} else if(n<181){
    console.log("El numero ingresado muestra el mes de JUNIO")
} else if(n<212){
    console.log("El numero ingresado muestra el mes de JULIO")
}else if(n<243){
    console.log("El numero ingresado muestra el mes de AGOSTO")
}else if(n<270){
    console.log("El numero ingresado muestra el mes de SEPTIEMBRE",n)
}else if(n<304){
    console.log("El numero ingresado muestra el mes de OCTUBRE")
}else if(n<334){
    console.log("El numero ingresado muestra el mes de NOVIEMBRE")
}else {
    console.log("El numero ingresado muestra el mes de DICIEMBRE")
}


//7
function horas(h) {
    if (h <= 40) {
    return h * 2600
}
    else {
    return h * 5000
    }
}

console.log(horas(30));

// 8
function llamada(ss) {
if (ss <= 180){
    return ss = ss * 1.1111111111111111
} else {
    return ss = ss * 1.2
}
}
console.log (llamada(180))




// ciclos 

    
